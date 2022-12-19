import React, { useState } from "react";
import Link from "next/link";
import Api from "../util/conf";
import { apiProduct } from "../interface";
import Image from "next/image";
import ActivityIndicator from "./ActivityIndicator";

interface cardProps {
  product: apiProduct;
}

export default function Card(props: cardProps) {
  const { product } = props;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="card">
      <div className="card__content">
        {!isLoading && (
          <div className="card-activityIndicator">
            <ActivityIndicator />
          </div>
        )}
        {product.attributes.images.data != null ? (
          <Image
            src={Api.url + product.attributes.images.data[0].attributes.url}
            alt=""
            width={306}
            height={246}
            onLoadingComplete={() => {
              setIsLoading(true);
            }}
          />
        ) : (
          <Image
            src="https://via.placeholder.com/150"
            alt=""
            loading="lazy"
            onLoadingComplete={() => {
              setIsLoading(true);
            }}
          />
        )}
        )
        <h2 className="inter inter-semiBold">
          {sliceText(product.attributes.nom, 30)}
        </h2>
        <p className="inter inter-regular">
          {sliceText(product.attributes.description, 60)}{" "}
        </p>
        <Link
          className="inter inter-regular"
          href={{ pathname: "/product", query: { id: product.id } }}
          style={{
            color: product.attributes.category.data.attributes.color,
          }}
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}
const sliceText = (title: string, size: number) => {
  return title.length > size ? title.slice(0, size) + "..." : title;
};
