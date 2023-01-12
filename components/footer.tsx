import React, { useEffect, useState } from "react";
import Link from "next/link";
import facebook from "../img/facebook-logo.svg";
import Switch from "./switch";
import Image from "next/image";
import { apiCategories } from "../interface";
import { useSelector } from "react-redux";
import { selectCategory } from "../slice/categorySlice";
import { useTheme } from 'next-themes'
import { BsFacebook } from "react-icons/bs";
import { removeAccentsAndSpaces } from "../util/function";

export default function Footer() {
  const S_redux: apiCategories[] = useSelector(selectCategory);
  const [service, setService] = useState<apiCategories[]>([]);

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (S_redux.length !== 0) {
      setService(S_redux);
    }
  }, [S_redux]);

  return (
    <footer className="footer padding__footer">
      <div className="max-w footer__content">
        <div className="footer__main">
          <Link href="/" title="Logo qui redirige vers la page d'accueil">
            <Image
              src={require("../img/logo-jcv.png")}
              alt="logo JCV consult"
              width={80}
              height={80}
              loading="lazy"
            />
          </Link>

          <div className="footer__navLinks">
            <h4 className="title title-small">Navigations</h4>

            <ul className="footer__list">
              <li>
                <Link href="/" title="Lien qui redirige vers la page d'accueil">Accueil</Link>{" "}
              </li>

              <li>
                <Link href="/contact" title="Lien qui redirige vers la page de contact">Contact</Link>
              </li>

              <li>
                <Link href="/legal" title="Lien qui redirige vers la page des mentions légales">Mentions légales</Link>
              </li>
            </ul>
          </div>

          <div className="footer__services">
            <h4 className="title title-small">Services</h4>

            <ul className="footer__list">
              {service.length === 0 ? (
                <DefaultList />
              ) : (
                service.map((item: apiCategories) => {
                  return (
                    <li key={item.id}>
                      <a
                        key={item.id + "header"}
                        href={`/#${removeAccentsAndSpaces(item.attributes.nom)}`}
                        title={`
                        Lien vers ${item.attributes.nom}
                        `}
                      >
                        {item.attributes.nom}
                      </a>
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          <div className="footer__info">
            <h4 className="title title-small">Informations</h4>
            <ul className="footer__list">
              <li>
                <a href="tel:0693815303" title="Numéro de l'entreprise">06 93 81 53 03</a>
              </li>
              <li>
                <a href="mailto:jvitry3@gmail.com" title="Adresse mail de l'entreprise">jvitry3@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="title title-small">Suivez-moi</h4>
            <a href="https://www.facebook.com/profile.php?id=100008184432842" target="_blank" title="Redirection vers la page Facebook de l'entreprise">
              <BsFacebook />
            </a>
          </div>
        </div>

        <div className="footer__end">
          <span className="footer__partner">

          </span>

          <span>Copyright JCV Consult 2023</span>
          <Switch
            on={theme === 'dark' ? true : false}
            onClick={(value: boolean) => {
              setTheme(value ? 'dark' : 'light')
            }}
          />
        </div>
      </div>
    </footer>
  );
}

export const DefaultList = () => {
  return (
    <>
      <li>
        <Link href="/">Chauffe-eau</Link>
      </li>
      <li>
        <Link href="/">Photovoltaïque</Link>
      </li>
    </>
  );
};
