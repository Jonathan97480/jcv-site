import React, { useEffect } from "react";
import { BsTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

import Head from "next/head";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact";
  }, []);

  return (
    <>
      <Head>
          <html lang="fr" />

        <title>Contact</title>
        <meta
          name="description"
          content="Page pour la prise de contact avec l'entreprise"
        />
        <meta name="og:title" content="Contact" />
        <meta
          property="og:description"
          content="Page pour la prise de contact avec l'entreprise"
        />
      </Head>
      <section className="contact">
        <div className="contact__content max-w padding">
          <h1 className="title title-medium">Contactez-nous</h1>
          <div className="contact__form">
            <form action="" className="form">
              <div className="contact__formInput">
                <label htmlFor="name" className="title form__label">
                  Nom *
                </label>
                <input
                  className="form__input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Votre nom"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="email" className="title form__label">
                  Email *
                </label>
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre email"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="phone" className="title form__label">
                  Tel (facultatif)
                </label>
                <input
                  className="form__input"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="message" className="title form__label">
                  Message *{" "}
                </label>
                <textarea
                  className="form__input"
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Votre message"
                />
              </div>
              <button className="btn">Envoyer</button>
            </form>
          </div>

          <div className="contact__info">
            <h2 className="title title-small">Informations</h2>

            <div className="contact__infoItem">
              <FaMapMarkerAlt />
              <span className="title">
                273 CHE EDWARD SAVIGNY CYTISES N7 97432 SAINT-PIERRE Réunion
              </span>
            </div>
            <div className="contact__infoItem">
              <BsTelephoneFill />
              <a href="tel:06 93 81 53 03" title="Le numéro de téléphone de l'entreprise">
                <span className="title">06 93 81 53 03</span>
              </a>
            </div>

            <div className="contact__infoItem">
              <FaMailBulk />
              <a href="mailto:jvitry3@gmail.com" title="l'adresse mail de l'entreprise">
                <span className="title "> jvitry3@gmail.com</span>
              </a>
            </div>
            <div className="contact__infoItem">
              <BsFillClockFill />
              <span className="title">
                Du lundi au vendredi de 8h30 à 18h00
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
