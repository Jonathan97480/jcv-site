import React, { useEffect, useState } from "react";
import Link from "next/link";
import facebook from "../img/facebook-logo.svg";
import Switch from "./switch";
import Image from "next/image";
import { apiCategories } from "../interface";
import { useSelector } from "react-redux";
import { selectCategory } from "../slice/categorySlice";
export default function Footer() {
  const S_redux: apiCategories[] = useSelector(selectCategory);
  const [service, setService] = useState<apiCategories[]>([]);

  useEffect(() => {
    if (S_redux.length !== 0) {
      setService(S_redux);
    }
  }, [S_redux]);

  return (
    <footer className="footer padding__footer">
      <div className="max-w footer__content">
        <div className="footer__main">
          <Link href="/">
          <Image
            src={require("../img/logo-jcv.png")}
            alt="logo JCV consult"
            width={135}
            height={64}
            loading="lazy"
          />
          </Link>

          <div className="footer__navLinks">
            <h4 className="inter inter-semiBold">Navigation</h4>

            <ul className="footer__list">
              <li className="inter inter-regular">
                <Link href="/">Accueil</Link>{" "}
              </li>

              <li className="inter inter-regular">
                <Link href="/">Services</Link>
              </li>

              <li className="inter inter-regular">
                <Link href="/">Contact</Link>
              </li>

              <li className="inter inter-regular">
                <Link href="/">Mention légal</Link>
              </li>
            </ul>
          </div>

          <div className="footer__services">
            <h4 className="inter inter-semiBold">Services</h4>

            <ul className="footer__list">
              {service.length === 0 ? (
                <DefaultList />
              ) : (
                service.map((item: apiCategories) => {
                  return (
                    <li className="inter inter-regular">
                      <Link
                        key={item.id + "footer"}
                        href={{
                          pathname: "/products",
                          query: { id: item.id, nom: item.attributes.nom },
                        }}
                      >
                        {item.attributes.nom}
                      </Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          <div className="footer__info">
            <h4 className="inter inter-semiBold">Information</h4>
            <ul className="footer__list">
              <li className="inter inter-regular">
                <a href="#">06 92 01 02 03</a>
              </li>
              <li className="inter inter-regular">
                <a href="#">JCV@gmail.com</a>
              </li>
              <li className="inter inter-regular">
                <a href="#">La reunion 97410</a>
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="inter inter-semiBold">Suivez moi</h4>
            <a href="#">
              <Image
                src={facebook}
                alt="Icon facebook"
                width={30}
                height={29}
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div className="footer__end">
          <span className="footer__partner">
            <Image
              src={require("../img/logo_region.png")}
              alt=""
              width={87}
              height={41}
              loading="lazy"
            />
            <Image
              src={require("../img/europe.png")}
              alt=""
              width={67}
              height={51}
              loading="lazy"
            />
          </span>

          <span className="inter inter-regular">Copyright JCV Consulting 2022</span>
          <Switch
            on={true}
            onClick={(value: boolean) => {
              return null;
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
