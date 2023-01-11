import React, { useState, useEffect } from "react";
import MenuIcon from "../img/menu.svg";
import serviceIcon from "../img/list-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { apiCategories } from "../interface";
import { setCategory, selectCategory } from "../slice/categorySlice";
import { setPartenaires } from "../slice/partenairesSlice";

import {
  ApiGetAllCategories,
  apiPartenaire,
  GetAllPartenaire,
} from "../util/apiRequest";
import { FaChevronDown } from "react-icons/fa";



export default function Header() {
  const [service, setService] = useState<apiCategories[]>([]);
  const categoryRedux: apiCategories[] = useSelector(selectCategory);
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryRedux.length === 0) {
      getCategories().then((_cat) => {
        getPartenaires().then((_part) => {
          dispatch(setCategory(_cat));

          dispatch(setPartenaires(_part));

          setService(_cat);
        });
      });
    } else {
      setService(categoryRedux);
    }
  }, [categoryRedux]);



  interface props {
    setStatus: (status: "success" | "error" | "noSubmit") => void;
  }


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
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />

        <nav
          className={isOpen ? "header__nav header__nav-open" : "header__nav"}
        >
          <Link href="/" title="Lien qui redirige vers la page d'accueil">
            <Image
              className="header__logo"
              src={require("../img/logo-jcv.png")}
              alt="Logo entreprise"
              width={50}
              height={50}
              loading="lazy"
            />
          </Link>

          <ul
            className={
              isOpen ? "header__list header__list-open" : "header__list"
            }
          >
            <li>
              <Link href="/#home" className="title tile-small" title="Lien qui vous regirigera vers la page d'accueil">
                Accueil
              </Link>
            </li>
            <li
              onClick={() => {
                setServiceOpen(!serviceOpen);
              }}
            >
              <ul>
                <li className="title tile-small header__serviceBtn header__services">
                  Services{" "}
                  <FaChevronDown size={18} />

                  <ul
                    className={
                      serviceOpen
                        ? "headerSmall__list headerSmall__list-open "
                        : "headerSmall__list"
                    }
                  >
                    {service === undefined ? (
                      <DefaultList />
                    ) : (
                      service.map((item: apiCategories) => {
                        return (
                          <li key={item.id}>
                            <a
                              key={item.id + "header"}
                              className="title tile-small"
                              href={`/#${item.attributes.nom}`}
                              title={`
                            Lien qui redirige vers la page ${item.attributes.nom}`}
                            >
                              {item.attributes.nom}
                            </a>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className="title tile-small" title="Lien qui envoie vers la page de contact">
                Contact
              </Link>
            </li>
            <li>
            <Link href={"/etudePersonaliser"} className=" header__btn btn" title="Lien qui envoie vers la page de demande de devis">
          Etude personalisée
        </Link>
            </li>
          </ul>
        </nav>
        <Link href={"/etudePersonaliser"} className=" header__btn btn" title="Lien qui envoie vers la page de demande de devis">
          Etude personalisée
        </Link>
      </div>
    </header>
  );
}

export const DefaultList = () => {
  return (
    <>
      <li>
        <a href="#Chauffe-eau">Chauffe-eau</a>
      </li>
      <li>
        <a href="#Photovoltaïque">Photovoltaïque</a>
      </li>
    </>
  );
};

async function getCategories() {
  const res: apiCategories[] = await ApiGetAllCategories();
  return res;
}

async function getPartenaires() {
  const res: apiPartenaire[] = await GetAllPartenaire();
  return res;
}
