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
          <Image src={require("../img/logo-jcv.png")} alt="" />

          <div className="footer__navLinks">
            <h4>Navigation</h4>
            <Link href="/">Accueil</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Mention légal</Link>
          </div>

          <div className="footer__services">
            <h4>Services</h4>
            {
              service.length === 0 ? <DefaultList /> :
                service.map((item: apiCategories) => {
                  return (
                    <Link key={item.id + 'footer'} href={{ pathname: "/products", query: { id: item.id, nom: item.attributes.nom } }}>{item.attributes.nom}</Link>
                  )
                })
            }

          </div>

          <div className="footer__info">
            <h4>Information</h4>
            <a href="#">06 92 01 02 03</a>
            <a href="#">JCV@gmail.com</a>
            <a href="#">La reunion 97410</a>
          </div>

          <div className="footer__social">
            <h4>Suivez moi</h4>
            <Image src={facebook} alt="" />
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

          <span>Copyright JCV Consulting 2022</span>
          <Switch
            on={true}
            onClick={(value: boolean) => { return null }}
          />
        </div>

      </div>
    </footer>
  );
}


export const DefaultList = () => {

  return (
    <>
      <li><Link href="/">Chauffe-eau</Link></li>
      <li><Link href="/">Photovoltaïque</Link></li>

    </>
  )
}
