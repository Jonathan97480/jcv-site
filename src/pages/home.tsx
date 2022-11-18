import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiGetAllCategories } from "../api/apiRequest";
import Api from "../api/conf";
import { apiCategories } from "../interface";

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
      <section className="home__hero">
        <h1 className="homeHero__title">JCV CONSULTING</h1>

        <p className="homeHero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim
          sit tincidunt non. Laoreet at nibh elit, ridiculus ultrices
          pellentesque tincidunt ut nunc.
        </p>
      </section>

      <section className="home__about">
        <div className="homeAbout__content">
          <h2>JCV Consulting</h2>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Faucibus vitae ornare eu
            mattis pellentesque morbi et duis condimentum. Sollicitudin risus
            enim felis nunc vitae. Hac molestie feugiat ipsum faucibus tempor
            vulputate eu. Ac sed interdum cursus proin.
          </p>
          <Link to={"/About"}>En savoir plus</Link>
        </div>

        <img
          src={require("../img/About-pic.png")}
          alt="Apropos image représentation"
        />
      </section>

      <section className="home__products">
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
