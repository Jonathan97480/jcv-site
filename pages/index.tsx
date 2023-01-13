import React, { useState, useEffect } from "react";
import Link from "next/link";
import Api from "../util/conf";
import { apiCategories } from "../interface";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCategory, selectCategoryLoading } from "../slice/categorySlice";
import { apiPartenaire } from "../util/apiRequest";
import {
  selectPartenaires,
  selectPartenairesLoading,
} from "../slice/partenairesSlice";
import { removeAccentsAndSpaces } from "../util/function";
import { MyMain } from "../components";

export default function Home() {
  const [_loading, set_Loading] = useState<boolean>(true);
  const categoryRedux: apiCategories[] = useSelector(selectCategory);
  const partenairesRedux: apiPartenaire[] = useSelector(selectPartenaires);
  const partenairesLoading: boolean = useSelector(selectPartenairesLoading);
  const categoryLoading: boolean = useSelector(selectCategoryLoading);
  useEffect(() => {
    if (partenairesLoading && categoryLoading) set_Loading(false);
  }, [partenairesLoading, categoryLoading]);

  return (



    <MyMain
      className="home"
      pageTitle="JCV-Consult"
      pageDescription="Les conseils d’un spécialiste à la Réunion pour choisir et obtenir, un chauffe-eau solaire robuste et de qualité."
    >
      <section className="hero" id="home">
        <div className="hero__content max-w padding">
          <h1 className="hero__title title title-black ">JCV CONSULT</h1>
          <p className="hero__text inter inter-regular">
            Réduisez fortement votre facture d’électricité grâce à notre sélection de chauffe-eau solaire de qualité supérieure.
          </p>
        </div>
      </section>

      <section className="about">
        <div className=" about__content max-w  padding">
          <div className="about__contentInfo">
            <div className="about__contentTxt ">
              <h2 className="title title-medium">JCV Consult</h2>
              <p className="about__paragraph">
                Notre entreprise est spécialisée dans la vente de chauffe-eau solaires de qualité supérieure.
                Nous sommes passionnés par l'énergie solaire
                et croyons fermement en ses nombreux avantages pour l'environnement et pour les consommateurs...
              </p>
              <Link
                className="btn about__btn"
                href={"/about"}
                title="Button qui vous redirigera vers la page de description de l'entreprise"
              >
                En savoir plus
              </Link>
            </div>

            <Image
              src={require("../img/hero/home.jpg")}
              alt="Image de représentation de"
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
                <div key={category.id} id={`${removeAccentsAndSpaces(category.attributes.nom)}`}>
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
                              backgroundImage: `url(${Api.url +
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
                            title={`
                              Vous Redirigera vers ${sous_category.attributes.name}
                              `}
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
        <h3 className="title title-medium">Nos partenaires</h3>
        <div className="partners__content max-w padding">
          {partenairesRedux.map((partenaire: apiPartenaire) => {
            return (
              <a
                href={partenaire.lien ? partenaire.lien : "#"}
                target="_blank"
                key={partenaire.id + "-partenaire"}
                title={`
                  Redirige vers le site de notre partenaire ${partenaire.nom}
                  `}
              >
                <div className="partners__card">
                  <Image
                    src={partenaire.logo}
                    alt={partenaire.nom}
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </MyMain>

  );
}
