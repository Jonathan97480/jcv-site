import React, { useState } from "react";
import MenuIcon from "../img/menu.svg";
import serviceIcon from "../img/list-icon.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header padding__header">
      <div className="header__content max-w">
        <img
          className="header__burger"
          src={MenuIcon}
          alt="Icon pour ouvrir le menu"
          width={41}
          height={41}
          loading={"lazy"}
        />

        <nav className="header__nav">
          <img
            className="header__logo"
            src={require("../img/logo-jcv.png")}
            alt="Logo entreprise"
          />

          <ul className="header__list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
            <Link to="/">
            Service <img src={serviceIcon} alt="" width={18} height={9} />
            </Link>

            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
            <ul className="headerSmall__list">
              <li><Link to="/">Chauffe-eau</Link></li>
              <li><Link to="/">Photovoltaïque</Link></li>
              <li><Link to="/">Sécurité</Link></li>
            </ul>
          </ul>
        </nav>
        <Link to={"/devis"} className=" header__btn btn ">
          Etude personaliser
        </Link>
      </div>
    </header>
  );
}
