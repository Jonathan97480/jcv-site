import React from "react";
import Link from "next/link";
import Api from "../util/conf";
import { apiProduct } from "../interface";
import Image from "next/image";

interface cardProps {
    product: apiProduct;
}


export default function Card(props: cardProps) {


    const { product } = props;



    return (
        <div className='card' >
            <div className='card__content'>
                {
                    product.attributes.images.data != null ? (
                        <img src={Api.url + product.attributes.images.data[0].attributes.url} alt="" width={306}
                            height={246} />
                    ) : (
                        <img src="https://via.placeholder.com/150" alt="" />
                    )
                }

                <h2>{sliceText(product.attributes.nom, 30)}
                </h2>


                <p>{sliceText(product.attributes.description, 60)} </p>
                <Link href={{ pathname: '/product', query: { id: product.id } }}


                    style={{
                        color: product.attributes.category.data.attributes.color
                    }
                    }
                >En savoir plus</Link>
            </div>
        </div >
    )

}
const sliceText = (title: string, size: number) => {
    return title.length > size ? title.slice(0, size) + '...' : title;
}