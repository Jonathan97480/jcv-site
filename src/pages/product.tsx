import React, { useEffect } from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";
import { apiProduct } from "../interface";
import Api from "../api/conf";

import { Carousel } from 'react-carousel-minimal';
import { picData } from "../interface/api";

export default function Product() {

    const { id } = useParams();
    const product = useLocation().state as apiProduct;
    const navigate = useNavigate();



    console.log('MY PRODUCT', product);


    const pictureList = fixePictureUrl(product.attributes.images.data);
    return (

        <>
            {
                product !== undefined ? (
                    < div className="product" >

                        <div>
                            <h1>{product.attributes.nom}</h1>
                        </div>

                        <div>
                            <img src={Api.url + product.attributes.images.data[0].attributes.url} alt="" />
                            <Carousel
                                data={pictureList}
                                time={2000}
                                width="850px"
                                height="500px"

                                radius="10px"
                                slideNumber={true}

                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="cover"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "850px",
                                    maxHeight: "500px",
                                    margin: "40px auto",
                                }}
                            />
                            <p>{product.attributes.description}</p>
                        </div>

                        <div className="product__info" >

                            <h2>Caractéritiques</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit pellentesque in tristique commodo mattis in. Pellentesque odio ultricies dictumst sed adipiscing viverra integer augue elementum. Ut amet, feugiat feugiat sit. Nunc porttitor adipiscing viverra porttitor nascetur aliquam.</p>

                            {
                                product.attributes.garantie !== null ?
                                    <span>Garantie :{product.attributes.garantie}</span> : null}
                            {
                                product.attributes.classe_energetique !== null ?
                                    <span>Classe énergétique : {product.attributes.classe_energetique}</span> : null}

                            {
                                product.attributes.disponibilite !== null ?
                                    <span>Disponible : {product.attributes.disponibilite ? 'En stock' : 'Rupture'}  </span> : null}

                            {
                                product.attributes.alimentation !== null ?
                                    <span>Alimentation :230 V Monophasé</span> : null}

                            {
                                product.attributes.dimension !== undefined ?
                                    <span>Dimension : {product.attributes.dimension.width + ' x ' + product.attributes.dimension.height + ' mm'}</span>
                                    : null
                            }


                            {
                                product.attributes.indice_reparabilite !== null ?
                                    <span>Index de réparabilité : {product.attributes.indice_reparabilite}</span> : null}

                            {

                                product.attributes.dimension !== null ?
                                    < span > Poids : 75kg</span> : null
                            }

                        </div>


                    </div>
                ) : navigate('/')}

        </>
    )


}


function fixePictureUrl(pic: picData[]) {
    return pic.map((p) => {
        return {
            image: Api.url + p.attributes.url,
            caption: ''
        }
    })

}