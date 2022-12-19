import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { apiProduct } from "../../interface";
import Api from "../../util/conf";

import { Carousel } from 'react-carousel-minimal-next';
import { picData } from "../../interface/api";
import { ApiGetProductById } from "../../util/apiRequest";
import Head from 'next/head'
import ActivityIndicator from "../../components/ActivityIndicator";

export default function Product() {

    const router = useRouter()
    const id = router.query.id as string;

    const [product, setProduct] = React.useState<apiProduct | null>(null);


    useEffect(() => {

        if (id !== undefined) {
            ApiGetProductById(parseInt(id)).then((data: apiProduct) => {

                setProduct(data);

            });
        }



    }, [id]);


    return (

        <>
            <Head>
                {
                    product !== null ? <title>{product.attributes.nom}</title> : <title>Chargement...</title>
                }
            </Head>

            {
                product !== null ? (
                    <div className="product max-w padding">
                            <h1 className="title title-secondary inter inter-medium"
                                style={{
                                    color: product.attributes.category.data.attributes.color,
                                }}
                            >
                                {product.attributes.nom}
                            </h1>


                        <div className="caroussel">
                            <Carousel
                                data={fixePictureUrl(product.attributes.images.data)}
                                time={2000}
                                width="850px"
                                height= "initial"
                                radius="10px"
                                slideNumber={false}
                                captionPosition="center"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="black-grey"
                                slideImageFit="cover"
                                thumbnails={true}
                                style={{
                                    textAlign: "center",
                                    maxWidth: "850px",
                                    margin: "40px auto",
                                }}
                            />
                        </div>
                        <p>{product.attributes.description}</p>

                        <div className="product__info">
                            <h2 className="title title-secondary inter inter-semiBold">Caractéritiques</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
                                pellentesque in tristique commodo mattis in. Pellentesque odio
                                ultricies dictumst sed adipiscing viverra integer augue elementum.
                                Ut amet, feugiat feugiat sit. Nunc porttitor adipiscing viverra
                                porttitor nascetur aliquam.
                            </p>
                            <table className="table">
                                <tbody>
                                    {product.attributes.garantie !== null ? (
                                        <tr>
                                            <th>Garantie </th>
                                            <td>
                                                <span> {product.attributes.garantie}</span>
                                            </td>
                                        </tr>
                                    ) : null}

                                    {product.attributes.classe_energetique !== null ? (
                                        <tr>
                                            <th>Classe énergétique </th>
                                            <td>
                                                <span> {product.attributes.classe_energetique}</span>
                                            </td>
                                        </tr>
                                    ) : null}

                                    {product.attributes.disponibilite !== null ? (
                                        <tr>
                                            <th>Disponible  </th>
                                            <td>
                                                <span>
                                                    {" "}
                                                    {product.attributes.disponibilite
                                                        ? "En stock"
                                                        : "Rupture"}{" "}
                                                </span>
                                            </td>
                                        </tr>
                                    ) : null}

                                    {product.attributes.alimentation !== null ? (
                                        <tr>
                                            <th>Alimentation  </th>
                                            <td>
                                                <span>230 V Monophasé</span>
                                            </td>
                                        </tr>
                                    ) : null}

                                    {product.attributes.dimension !== null ? (
                                        <tr>
                                            <th>Dimension  </th>
                                            <td>
                                                <span>
                                                    {product.attributes.dimension.width +
                                                        " x " +
                                                        product.attributes.dimension.height +
                                                        " mm"}
                                                </span>
                                            </td>
                                        </tr>
                                    ) : null}

                                    {product.attributes.indice_reparabilite !== null ? (
                                        <tr>
                                            <th>Index de réparabilité  </th>
                                            <td>
                                                <span>{product.attributes.indice_reparabilite}</span>
                                            </td>
                                        </tr>
                                    ) : null}

                                    {product.attributes.dimension !== null ? (
                                        <tr>
                                            <th>Poids  </th>
                                            <td>
                                                <span>75kg</span>
                                            </td>
                                        </tr>
                                    ) : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) :   <ActivityIndicator />}

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
