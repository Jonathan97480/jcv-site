import React from "react";
import { Link } from "react-router-dom";
import facebook from "../img/facebook-logo.svg";
import Switch from "./switch";
export default function Footer() {
  return (
    <footer className="footer padding__footer">
      <div className="max-w footer__content">
        <div className="footer__main">
          <img src={require("../img/logo-jcv.png")} alt="" />

          <div className="footer__navLinks">
            <h4>Navigation</h4>
            <span>Accueil</span>
            <span>Services</span>
            <span>Contact</span>
          </div>

          <div className="footer__services">
            <h4>Services</h4>
            <span>Energie renouvelable</span>
            <span>Incendie</span>
            <span>Maleveillance</span>
          </div>

          <div className="footer__info">
            <h4>Information</h4>
            <span>06 92 01 02 03</span>
            <span>JCV@gmail.com</span>
            <span>La reunion 97410</span>
          </div>

          <div className="footer__social">
            <h4>Suivez moi</h4>
            <img src={facebook} alt="" />
          </div>
        </div>

        <div className="footer__end">
          <span className="footer__partner">
            <img
              src={require("../img/logo_region.png")}
              alt=""
              width={87}
              height={41}
              loading="lazy"
            />
            <img
              src={require("../img/europe.png")}
              alt=""
              width={67}
              height={51}
              loading="lazy"
            />
          </span>

          <span>Copyright JCV Consulting 2022</span>
          <Switch
          on={true}
          onClick={(value: boolean) => {return null}}
        />
        </div>

      </div>
    </footer>
  );
}
