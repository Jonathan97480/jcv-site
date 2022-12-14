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
          <h1 className="hero__title title">JCV CONSULT</h1>

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
              <h2 className="title title-secondary">JCV Consult</h2>
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
              alt="A propos image de représentation"
              width={328}
              height={207}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="products">
        <div className="products__content max-w padding">
          {loading === true ? (
            <p>Chargement...</p>
          ) : (categories.map((category: apiCategories) => {
            return (
              <div key={category.id}>
                <h3 className="products__title title title-secondary" style={{ color: category.attributes.color }} >{category.attributes.nom}</h3>
                <div className="products__gallery">

                  {
                    category.attributes.sous_categories.data.map((sous_category) => {
                      return (
                        <Link
                          style={{
                            backgroundImage: `url(${Api.url + sous_category.attributes.image.data.attributes.url})`,
                          }}
                          key={sous_category.id}
                          className="products__card"
                          to={"/products/" + sous_category.id + '/' + sous_category.attributes.name}
                        >
                          <div className="products__card-hover">
                            <h4 className="title">{sous_category.attributes.name}</h4>
                            <button className="btn">En savoir plus</button>
                          </div>
                        </Link>
                      )
                    })

                  }

                </div>
              </div>
            )
          }))}
        </div>
      </section>
    </div>
  );
}
