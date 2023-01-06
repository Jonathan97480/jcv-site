import React, { useState, useEffect } from "react";
import MenuIcon from "../img/menu.svg";
import serviceIcon from "../img/list-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { apiCategories } from "../interface";
import { setCategory, selectCategory } from "../slice/categorySlice";
import { setPartenaires } from "../slice/partenairesSlice";
import { ApiGetAllCategories, apiPartenaire, GetAllPartenaire } from "../util/apiRequest";
import Api from "../util/conf";

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
          <Link href="/">
            <Image
              className="header__logo"
              src={require("../img/logo-jcv.png")}
              alt="Logo entreprise"
            />
          </Link>

          <ul
            className={
              isOpen ? "header__list header__list-open" : "header__list"
            }
          >
            <li>
              <Link href="/#home" className="title tile-small">
                Accueil
              </Link>
            </li>
            <li
              onClick={() => {
                setServiceOpen(!serviceOpen);
              }}
            >
              <div className="title tile-small header__serviceBtn header__services">
                Services{" "}
                <Image
                  src={serviceIcon}
                  alt=""
                  width={18}
                  height={9}
                  loading="lazy"
                />
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
                          >
                            {item.attributes.nom}
                          </a>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            </li>
            <li>
              <Link href="/contact" className="title tile-small">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link href={"/etudePersonaliser"} className=" header__btn btn ">
          Etude personnaliser
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
