import React, { useState, useEffect } from "react";
import Link from "next/link";
import Api from "../util/conf";
import { apiCategories } from "../interface";
import Image from "next/image";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory, selectCategoryLoading } from "../slice/categorySlice";
import { apiPartenaire } from "../util/apiRequest";
import {
  selectPartenaires,
  selectPartenairesLoading,
} from "../slice/partenairesSlice";
import { sliceText } from "../util/function";
import { closeHeader } from "../slice/headerStatu.Slice";

export default function Home() {
  const [_loading, set_Loading] = useState<boolean>(true);
  const categoryRedux: apiCategories[] = useSelector(selectCategory);
  const partenairesRedux: apiPartenaire[] = useSelector(selectPartenaires);
  const partenairesLoading: boolean = useSelector(selectPartenairesLoading);
  const categoryLoading: boolean = useSelector(selectCategoryLoading);
  const HeaderRedux = useSelector((state: any) => state.Header);
  const dispatch = useDispatch();
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
        <meta property="og:image" content="../img/logo-jcv.png" />
      </Head>

      <div className="home" onClick={
        () => {

          if (HeaderRedux.isOPen) {
            dispatch(closeHeader(false))
          }
        }
      }>
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
                  {sliceText(
                    ` Notre entreprise est spécialisée dans la vente de chauffe-eau solaires de qualité supérieure. Nous sommes passionnés par l'énergie solaire et croyons fermement en ses nombreux avantages pour l'environnement et pour les consommateurs.
                    Notre équipe de professionnels est entièrement dédiée à la satisfaction de nos clients. Nous offrons une large gamme de chauffe-eau solaires adaptés à tous les besoins et budgets, ainsi que des conseils experts pour vous aider à choisir le modèle le plus adapté à votre maison ou à votre entreprise.
                    De plus notre gamme de chauffe-eau solaires est conçue pour durer dans le temps, avec des matériaux de qualité et une technologie de pointe. Nos chauffe-eaux solaires sont une solution durable pour chauffer votre eau, en utilisant l'énergie gratuite et renouvelable du soleil.
                    En optant pour un chauffe-eau solaire, vous contribuez à la protection de l'environnement en réduisant votre empreinte carbone.
                    Les chauffe-eau solaires sont une solution à long terme pour votre consommation d'eau chaude, avec des coûts d'exploitation très faibles sur le long terme.
                    Nous sommes fiers de proposer des produits écologiques et économiques qui vous permettront de réduire votre empreinte carbone et votre facture d'électricité tout en profitant d'une eau chaude abondante. Nous espérons avoir le plaisir de vous compter parmi nos nombreux clients satisfaits. `,
                    250
                  )}
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
      </div>
    </>
  );
}
