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
            <div className='card__img'>
                {
                    product.attributes.images.data != null ? (
                        <img src={Api.url + product.attributes.images.data[0].attributes.url} alt="" />
                    ) : (
                        <img src="https://via.placeholder.com/150" alt="" />
                    )
                }

                <h2>{product.attributes.nom}</h2>


                <p>{product.attributes.description} </p>
                <button
                    onClick={() => {
                        navigate(`/product/${product.id}`, { state: product });
                    }}
                >En savoir plus</button>
            </div>
        </div>
    )

}