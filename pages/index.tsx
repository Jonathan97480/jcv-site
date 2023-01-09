import React, { useState, useEffect } from "react";
import Link from "next/link";
import Api from "../util/conf";
import { apiCategories } from "../interface";
import Image from "next/image";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectCategory, selectCategoryLoading } from "../slice/categorySlice";
import { apiPartenaire } from "../util/apiRequest";
import {
  selectPartenaires,
  selectPartenairesLoading,
} from "../slice/partenairesSlice";

export default function Home() {
  const [_loading, set_Loading] = useState<boolean>(true);
  /*   const [categories, setCategories] = useState<apiCategories[]>([]); */

  const categoryRedux: apiCategories[] = useSelector(selectCategory);
  const partenairesRedux: apiPartenaire[] = useSelector(selectPartenaires);
  const partenairesLoading: boolean = useSelector(selectPartenairesLoading);
  const categoryLoading: boolean = useSelector(selectCategoryLoading);

  useEffect(() => {
    if (partenairesLoading && categoryLoading) set_Loading(false);
  }, [partenairesLoading, categoryLoading]);

  return (
    <>
      <Head>
        <title>JCV-Consult</title>
        <meta
          name="description"
          content="Des conseils pour choisir et obtenir, un chauffe-eau solaire de qualité, des solutions pour la sécurité incendie et la surveillance vidéo."
        />
        <meta name="og:title" content="JCV-Consult" />
        <meta
          property="og:description"
          content="Des conseils pour choisir et obtenir, un chauffe-eau solaire de qualité, des solutions pour la sécurité incendie et la surveillance vidéo."
        />
      </Head>

      <div className="home">
        <section className="hero" id="home">
          <div className="hero__content max-w padding">
            <h1 className="hero__title title title-black ">JCV CONSULT</h1>
            <p className="hero__text inter inter-regular">
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
                <h2 className="title title-medium">JCV Consult</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Faucibus vitae ornare
                  eu mattis pellentesque morbi et duis condimentum. Sollicitudin
                  risus enim felis nunc vitae. Hac molestie feugiat ipsum
                  faucibus tempor vulputate eu. Ac sed interdum cursus proin.
                </p>

                <Link className="btn about__btn" href={"/about"}>
                  En savoir plus
                </Link>
              </div>

              <Image
                src={require("../img/hero/home.jpg")}
                alt="A propos image de représentation"
                width={328}
                height={207}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="productCategory">
          <div className="productCategory__content max-w padding">
            {_loading === true ? (
              <p>Chargement...</p>
            ) : (
              categoryRedux.map((category: apiCategories) => {
                return (
                  <div key={category.id} id={`${category.attributes.nom}`}>
                    <h3
                      className="productCategorytitle title title-medium"
                      style={{ color: category.attributes.color }}
                    >
                      {category.attributes.nom}
                    </h3>
                    <div className="productCategory__gallery">
                      {category.attributes.sous_categories.data.map(
                        (sous_category) => {
                          return (
                            <Link
                              style={{
                                backgroundImage: `url(${
                                  Api.url +
                                  sous_category.attributes.image.data.attributes
                                    .url
                                })`,
                              }}
                              key={sous_category.id}
                              className="productCategory__card"
                              href={{
                                pathname: "/products",
                                query: {
                                  id: sous_category.id,
                                  nom: sous_category.attributes.name,
                                },
                              }}
                            >
                              <div className="productCategory__card-hover">
                                <h4 className="title title-small">
                                  {sous_category.attributes.name}
                                </h4>
                                <button className="btn">En savoir plus</button>
                              </div>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
        <section className="partners">
          <h3>Nos partenaires</h3>
          <div className="partners__content">
            {partenairesRedux.map((partenaire: apiPartenaire) => {
              return (
                <a
                  href={partenaire.lien ? partenaire.lien : "#"}
                  target="_blank"
                  key={partenaire.id + "-partenaire"}
                >
                  <div className="partners__card">
                    <Image
                      src={partenaire.logo}
                      alt={partenaire.nom}
                      width={200}
                      height={200}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
