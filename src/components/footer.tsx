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
            <Link to="/">Accueil</Link>
            <Link to="/">Services</Link>
            <Link to="/">Contact</Link>
          </div>

          <div className="footer__services">
            <h4>Services</h4>
            <Link to="/">Energie renouvelable</Link>
            <Link to="/">Incendie</Link>
            <Link to="/">Maleveillance</Link>
          </div>

          <div className="footer__info">
            <h4>Information</h4>
            <a href="#">06 92 01 02 03</a>
            <a href="#">JCV@gmail.com</a>
            <a href="#">La reunion 97410</a>
          </div>

          <div className="footer__social">
            <h4>Suivez moi</h4>
            <a href="#"><img src={facebook} alt="" width={30} height={29} loading='lazy'/></a>

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
