import React, { useEffect, useState } from "react";
import { BsTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";
import {
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
} from "../util/function";
import { FormResponse, MyMain } from "../components";
import ActivityIndicator from "../components/ActivityIndicator";

interface ContactForm {
  name: string;
  errorName: string;
  email: string;
  errorEmail: string;
  phone: string;
  errorPhone: string;
  message: string;
  errorMessage: string;
}

export default function Contact() {
  const [form, setForm] = React.useState<ContactForm>(resetForm());
  const [formIsSubmit, setFormIsSubmit] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<"sucess" | "error" | "noSubmit">(
    "noSubmit"
  );


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (


    <MyMain
      className="contact"
      pageTitle="Contact"
      pageDescription="Page pour la prise de contact avec l'entreprise"
    >
      <div className="contact__content max-w padding">
        <h1 className="title title-medium">Contactez-nous</h1>
        <div className="contact__form">
          {!formIsSubmit ? <FormResponse status={formStatus}>
            <form
              action=""
              className="form"
              onSubmit={(e) => {
                const newForm = submitForm(form, setForm, e, setFormStatus, setFormIsSubmit);
                console.log(newForm);
                setForm(newForm);
              }}
            >
              <div className="contact__formInput">
                <label htmlFor="name" className="title form__label">
                  Nom
                </label>
                <input
                  className="form__input"
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      name: e.target.value,
                      errorName: validateName(e.target.value),
                    });
                  }}
                  id="name"
                  placeholder="Votre nom"
                />
                <FormError errorMessage={form.errorName} />
              </div>

              <div className="contact__formInput">
                <label htmlFor="email" className="title form__label">
                  Email
                </label>
                <input
                  className="form__input"
                  required
                  value={form.email}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      email: e.target.value,
                      errorEmail: validateEmail(e.target.value),
                    });
                  }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Votre email"
                />
                <FormError errorMessage={form.errorEmail} />
              </div>

              <div className="contact__formInput">
                <label htmlFor="phone" className="title form__label">
                  Tel
                </label>
                <input
                  className="form__input"
                  value={form.phone}
                  required
                  onChange={(e) => {
                    setForm({
                      ...form,
                      phone: e.target.value,
                      errorPhone: validatePhone(e.target.value),
                    });
                  }}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                />
                <FormError errorMessage={form.errorPhone} />
              </div>

              <div className="contact__formInput">
                <label htmlFor="message" className="title form__label">
                  Message
                </label>
                <textarea
                  className="form__input"
                  value={form.message}
                  required
                  onChange={(e) => {
                    setForm({
                      ...form,
                      message: e.target.value,
                      errorMessage: validateMessage(e.target.value),
                    });
                  }}
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Votre message"
                />
                <FormError errorMessage={form.errorMessage} />
              </div>
              <button className="btn">Envoyer</button>
            </form>
          </FormResponse> : <ActivityIndicator />}
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
            <a
              href="tel:06 93 81 53 03"
              title="Le numéro de téléphone de l'entreprise"
            >
              <span className="title">06 93 81 53 03</span>
            </a>
          </div>

          <div className="contact__infoItem">
            <FaMailBulk />
            <a
              href="mailto:jvitry3@gmail.com"
              title="l'adresse mail de l'entreprise"
            >
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
    </MyMain>
  );
}

export const FormError = ({ errorMessage }: { errorMessage: string }) => {
  const [error, setError] = useState(errorMessage);
  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);
  return (
    <div className="form__error">{error !== "" && <p>{error}</p>}</div>
  );
};

function resetForm(): ContactForm {
  return {
    name: "",
    errorName: "",
    email: "",
    errorEmail: "",
    phone: "",
    errorPhone: "",
    message: "",
    errorMessage: "",
  };
}

function submitForm(
  _form: ContactForm,
  set_form: (form: ContactForm) => void,
  event: React.FormEvent<HTMLFormElement>,
  setStatus: (status: "sucess" | "error" | "noSubmit") => void,
  setFormIsSubmit: (value: boolean) => void

) {
  event.preventDefault();
  setFormIsSubmit(true)

  /* TODO: Add submit form logic */
  const newFormData = {
    ..._form,
    errorName: "",
    errorEmail: "",
    errorPhone: "",
    errorMessage: "",
  };

  const formData = new FormData();
  formData.append("email", newFormData.email);
  formData.append(
    "message",
    `message venant du formulaire de contact de ${newFormData.name}
        qui a pour numéro de téléphone ${newFormData.phone}
        et qui a pour message : ${newFormData.message}`
  );

  fetch("https://formspree.io/f/mbjejwdo", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        setStatus("sucess")
        setFormIsSubmit(false)
      }
    })
    .catch((error) => {
      setStatus("error")
      setFormIsSubmit(false)
    });

  return resetForm();
}
