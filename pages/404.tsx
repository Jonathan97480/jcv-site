import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MyMain } from "../components";

export default function FourOhFour() {
  return (
    <MyMain
      pageTitle="Page 404"
      pageDescription="Page d'erreur 404"
      className="page404"
    >
      <div className="max-w padding page404__content">
        <Image
          src={require("../img/girl-oups.png")}
          alt="404"
          width={580}
          height={440}
          loading="lazy"
        />
        <div className="page404__info">
          <h1 className="title title-medium">Oups, voilà qui n'était pas prévu!</h1>
          <small className="title title-medium">Erreur 404</small>
          <p>
            Désolé mais ce lien est introuvable! Dirigez-vous vers la page
            d'accueil ou contactez nous en cas de questions...
          </p>
          <div className="page404__btn">
            <Link href="/" className="btn">
              Retour à la page d'accueil
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              contactez nous
            </Link>
          </div>
        </div>
      </div>
    </MyMain>
  );
}
