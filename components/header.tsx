import React, { useState, useEffect } from "react";
import MenuIcon from "../img/menu.svg";
import serviceIcon from "../img/list-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { apiCategories } from "../interface";
import { setCategory, selectCategory } from "../slice/categorySlice";
import { ApiGetAllCategories } from "../util/apiRequest";

export default function Header() {
  const [service, setService] = useState<apiCategories[]>([]);
  const S_redux: apiCategories[] = useSelector(selectCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    if (S_redux.length === 0) {
      ApiGetAllCategories().then((data: apiCategories[]) => {


        dispatch(setCategory(data));
        setService(data);


      });
    } else {
      setService(S_redux);
    }
  }, [S_redux]);



  return (
    <header className="header padding__header">
      <div className="header__content max-w">
        <Image
          className="header__burger"
          src={MenuIcon}
          alt="Icon pour ouvrir le menu"
          width={41}
          height={41}
          loading={"lazy"}
        />

        <nav className="header__nav">
          <Image
            className="header__logo"
            src={require("../img/logo-jcv.png")}
            alt="Logo entreprise"
          />

          <ul className="header__list">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/">
                Service <Image src={serviceIcon} alt="" width={18} height={9} />
              </Link>

            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
            <ul className="headerSmall__list">
              {
                service === undefined ? <DefaultList /> :
                  service.map((item: apiCategories) => {
                    return (
                      <li key={item.id}>
                        <Link key={item.id + 'header'} href={{ pathname: "/products", query: { id: item.id, nom: item.attributes.nom } }}>{item.attributes.nom}</Link>
                      </li>
                    );
                  })
              }

            </ul>
          </ul>
        </nav>
        <Link href={"/devis"} className=" header__btn btn ">
          Etude personnaliser
        </Link>
      </div>
    </header>
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