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
          <h1>Contacter-nous</h1>
          <div className="contact__form">
            <form action="">
              <div className="contact__formInput">
                <label htmlFor="name">Nom *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Votre nom"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre email"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="phone">Tel (facultatif)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="contact__formInput">
                <label htmlFor="message">Message *</label>
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
              <span>12 rue Saint-Pierre 97410</span>
            </div>
            <div className="contact__infoItem">
              <BsTelephone />
              <span>06 92 01 02 03</span>
            </div>

            <div className="contact__infoItem">
              <IoMdMailOpen />
              <span>tim.jennings@example.com</span>
            </div>
            <div className="contact__infoItem">
              <BsClock />
              <span>Du lundi au vendredi de 7h30 à 8h30</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
