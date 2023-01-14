import React, { useState, useEffect } from "react";
import MenuIcon from "../img/menu.svg";
import { useRouter } from 'next/router'
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
import { openHeader } from "../slice/headerStatu.Slice";
import { removeAccentsAndSpaces } from "../util/function";


export default function Header() {

  const categoryRedux: apiCategories[] = useSelector(selectCategory);
  const HeaderRedux = useSelector((state: any) => state.Header);

  const [service, setService] = useState<apiCategories[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {

    if (categoryRedux.length === 0) {

      getCategories().then((_cat) => {

        getPartenaires().then((_part) => {

          dispatch(setCategory(_cat));
          dispatch(setPartenaires(_part));

          setService(_cat);

        }).catch((err) => {

          console.log("Une erreur est survenue lors de la récupération des Partenaires : ", err)
        });

      }).catch((err) => {

        console.log("Une erreur est survenue lors de la récupération des Catégories : ", err)
      });

    } else {

      setService(categoryRedux);
    }
  }, [categoryRedux]);

  useEffect(() => {

    setIsOpen(HeaderRedux.isOPen);

  }, [HeaderRedux]);




  interface props {

    setStatus: (status: "success" | "error" | "noSubmit") => void;
  }


  return (
    <header className={isOpen ? "header padding__header header-open" : "header padding__header  header-close"}>
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
            dispatch(openHeader(true));
          }}
        />

        <nav
          className={"header__nav header__nav-open"}
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
              "header__list header__list-open"
            }
          >
            <li>
              <Link onClick={() => {
                setIsOpen(false);
              }}
                href="/#home" className="title tile-small" title="Lien qui vous regirigera vers la page d'accueil">
                Accueil
              </Link>
            </li>
            <li

            >
              <ul className="serviceBlock">
                <li className="title tile-small header__serviceBtn header__services">
                  Services{" "}
                  <FaChevronDown size={18} />

                  <ul
                    className={"headerSmall__list headerSmall__list-open "}
                  >
                    {service === undefined ? (
                      <DefaultList />
                    ) : (
                      service.map((item: apiCategories) => {
                        return (
                          <li key={item.id}>
                            <a
                              onClick={() => {
                                setIsOpen(false);
                              }}
                              key={item.id + "header"}
                              className="title tile-small"
                              href={`/#${removeAccentsAndSpaces(item.attributes.nom)}`}
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
              <Link onClick={() => {
                setIsOpen(false);
              }} href="/contact" className="title tile-small" title="Lien qui envoie vers la page de contact">
                Contact
              </Link>
            </li>
            <li>
              <BtnEtudePersonnalisee setIsOpen={setIsOpen} />
            </li>
          </ul>
        </nav>
        <BtnEtudePersonnalisee setIsOpen={setIsOpen} />
      </div>
    </header >
  );
}


export const BtnEtudePersonnalisee = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {

  const router = useRouter()

  return (
    <Link

      onClick={() => {
        setIsOpen(false);
      }}
      href={"/etudePersonnalisee"}
      className="btn header__btn btn"
      style={
        router.pathname === "/etudePersonnalisee" ? { backgroundColor: "var(--links-off-color)" } : { backgroundColor: "var(--links-primary-color)", }
      }
      title="Lien qui envoie vers la page de demande de devis">
      Etude personnalisée
    </Link>
  )
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
