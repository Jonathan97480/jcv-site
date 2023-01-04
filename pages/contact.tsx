import React, { useEffect } from "react";
import { BsClock, BsFillGeoAltFill, BsTelephone } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";
import Head from 'next/head'


export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact";
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section className="contact">
        <div className="contact__content max-w padding">
          <h1 className="title title-medium">Contactez-nous</h1>
          <div className="contact__form">
            <form action="">
              <div className="contact__formInput">
                <label htmlFor="name" className="title">Nom *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Votre nom"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="email" className="title">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre email"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="phone" className="title">Tel (facultatif)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="message" className="title">Message * </label>
                <textarea
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
            <div className="contact__infoItem">
              <BsFillGeoAltFill />
              <span className="title title-small">273 CHE EDWARD SAVIGNY CYTISES N7 97432 SAINT-PIERRE Réunion</span>
            </div>
            <div className="contact__infoItem">
              <BsTelephone />
              <span className="title title-small">06 93 81 53 03</span>
            </div>

            <div className="contact__infoItem">
              <IoMdMailOpen />
              <span className="title title-small">jvitry3@gmail.com</span>
            </div>
            <div className="contact__infoItem">
              <BsClock />
              <span className="title title-small">Du lundi au vendredi de 8h30 à 18h00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
