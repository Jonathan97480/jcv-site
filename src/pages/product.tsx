import React, { useEffect } from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";
import { apiProduct } from "../interface";
import Api from "../api/conf";

import { Carousel } from "react-carousel-minimal";
import { picData } from "../interface/api";

export default function Product() {
  const { id } = useParams();
  const product = useLocation().state as apiProduct;
  const navigate = useNavigate();

  console.log("MY PRODUCT", product);

  const pictureList = fixePictureUrl(product.attributes.images.data);
  return (
    <>
      {product !== undefined ? (
        <div className="product max-w padding">
          <div>
            <h1
              style={{
                color: product.attributes.category.data.attributes.color,
              }}
            >
              {product.attributes.nom}
            </h1>
          </div>

          <div className="caroussel">
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
              slideBackgroundColor="black-grey"
              slideImageFit="contain"
              thumbnails={false}
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
          <p>{product.attributes.description}</p>

          <div className="product__info">
            <h2>Caractéritiques</h2>

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

                {product.attributes.garantie !== null ? (
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

                {product.attributes.dimension !== undefined ? (
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
      ) : (
        navigate("/")
      )}
    </>
  );
}

function fixePictureUrl(pic: picData[]) {
  return pic.map((p) => {
    return {
      image: Api.url + p.attributes.url,
      caption: "",
    };
  });
}
