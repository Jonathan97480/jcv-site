import React from "react";
import { Link } from "react-router-dom";
import Api from "../api/conf";
import { apiProduct } from "../interface";
import { useNavigate } from 'react-router-dom';

interface cardProps {
    product: apiProduct;
}

export default function Card(props: cardProps) {

    const navigate = useNavigate();

    const { product } = props;

    return (
        <div className='card' >
            <div className='card__content'>
                {
                    product.attributes.images.data != null ? (
                        <img src={Api.url + product.attributes.images.data[0].attributes.url} alt="" width={306}
                        height={246}/>
                    ) : (
                        <img src="https://via.placeholder.com/150" alt=""  />
                    )
                }

                <h2>{sliceText(product.attributes.nom,30)}
                </h2>


                <p>{sliceText(product.attributes.description,60)} </p>
                <button
                    onClick={() => {
                        navigate(`/product/${product.id}`, { state: product });
                    }}
                    style={{
                        color:product.attributes.category.data.attributes.color
                    }}
                >En savoir plus</button>
            </div>
        </div>
    )

}
const sliceText = (title: string,size:number) => {
    return title.length > size ? title.slice(0, size) + '...' : title;
}
