import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>

        <title>En savoir plus</title>
        <meta
          name="description"
          content="page de présentation de l'entreprise"
        />
        <meta name="og:title" content="En savoir plus" />
        <meta
          property="og:description"
          content="page de présentation de l'entreprise"
        />
      </Head>
      <div className="aboutPage">
        <div className="aboutPage__content padding max-w">
          <h1 className="title title-medium">JCV Consult</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Image
            src={require("../img/About-pic.png")}
            alt="Image de l'entreprise"
            width={320}
            height={180}
            loading="lazy"
          />

          <p>
          Notre entreprise est spécialisée dans la vente de chauffe-eau solaires de qualité supérieure. Nous sommes passionnés par l'énergie solaire et croyons fermement en ses nombreux avantages pour l'environnement et pour les consommateurs.
Notre équipe de professionnels est entièrement dédiée à la satisfaction de nos clients. Nous offrons une large gamme de chauffe-eau solaires adaptés à tous les besoins et budgets, ainsi que des conseils experts pour vous aider à choisir le modèle le plus adapté à votre maison ou à votre entreprise.
 
De plus notre gamme de chauffe-eau solaires est conçue pour durer dans le temps, avec des matériaux de qualité et une technologie de pointe. Nos chauffe-eaux solaires sont une solution durable pour chauffer votre eau, en utilisant l'énergie gratuite et renouvelable du soleil.
En optant pour un chauffe-eau solaire, vous contribuez à la protection de l'environnement en réduisant votre empreinte carbone.
Les chauffe-eau solaires sont une solution à long terme pour votre consommation d'eau chaude, avec des coûts d'exploitation très faibles sur le long terme.
 
Nous sommes fiers de proposer des produits écologiques et économiques qui vous permettront de réduire votre empreinte carbone et votre facture d'électricité tout en profitant d'une eau chaude abondante. Nous espérons avoir le plaisir de vous compter parmi nos nombreux clients satisfaits.
          </p>
        </div>
      </div>
    </>
  );
}
