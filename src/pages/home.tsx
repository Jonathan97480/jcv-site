import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import { ApiGetAllCategories } from "../api/apiRequest";
import Api from "../api/conf";
import { apiCategories } from "../interface";
import CSS from "csstype";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<apiCategories[]>([]);

  useEffect(() => {
    ApiGetAllCategories().then((data: apiCategories[]) => {
      setCategories(data);

      setLoading(false);
    });
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__content max-w padding">
          <h1 className="hero__title">JCV CONSULTING</h1>

          <p className="hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            dignissim sit tincidunt non. Laoreet at nibh elit, ridiculus
            ultrices pellentesque tincidunt ut nunc.
          </p>
        </div>
      </section>

      <section className="about">

        <div className=" about__content max-w  padding">


          <div className="about__contentInfo">

            <div className="about__contentTxt ">
            <h2>JCV Consulting</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Faucibus vitae ornare eu
                mattis pellentesque morbi et duis condimentum. Sollicitudin
                risus enim felis nunc vitae. Hac molestie feugiat ipsum faucibus
                tempor vulputate eu. Ac sed interdum cursus proin.
              </p>

              <Link className="btn about__btn" to={"/About"}>
                En savoir plus
              </Link>

            </div>

            <img
              src={require("../img/hero/home.jpg")}
              alt="Apropos image représentation"
              width={328}
              height={207}
              loading="lazy"
            />

          </div>

        </div>
      </section>

      <section className="products">
        <h3>Catégorie de produits</h3>

        {loading === true ? (
          <p>Chargement...</p>
        ) : (
          categories.map((category: apiCategories) => {
            return (
              <Link
                key={category.id}
                className="homeProducts__category"
                to={"/products/" + category.id}
              >
                <img
                  src={Api.url + category.attributes.pic.data.attributes.url}
                  alt=""
                  width={300}
                />
                <h4>{category.attributes.name}</h4>
                <button>Voir Produit</button>
              </Link>
            );
          })
        )}
      </section>
    </div>
  );
}
