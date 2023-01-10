import { Button } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FormResponse } from "../../components";
import ActivityIndicator from "../../components/ActivityIndicator";
import { apiFormulaire, GetAllFormulaire } from "../../util/apiRequest";

interface EtudeProps {
  navigation: any;
}

export default function Etude({ navigation }: EtudeProps) {
  const [formulaire, setFormulaire] = React.useState<apiFormulaire[]>([]);
  const [formIsSelector, setFormIsSelector] = React.useState<{
    isSelect: boolean;
    id: number;
  }>({ isSelect: false, id: 0 });
  const [formNumber, setFormNumber] = React.useState<{
    numberForm: number;
    curentForm: number;
  }>({ numberForm: 0, curentForm: 0 });

  const [curentForm, setCurentForm] = React.useState<any>({});
const [formIsSubmit, setFormIsSubmit]= useState<boolean>(false);

  const [formStatus, setFormStatus] = useState<"sucess" | "error" | "noSubmit">(
    "noSubmit"
  );


  useEffect(() => {
    GetAllFormulaire().then((_data: apiFormulaire[]) => {
      setFormulaire(_data);
    });
  }, []);


  return (
    <>

      <Head>

        <title>Etude personnalisée</title>
        <meta name="description" content="Page de demande de devis personnalisée" />
        <meta property="og:title" content="Etude personnalisée" />
        <meta property="og:description" content="Page de demande de devis personnalisée" />
      </Head>
      <main className="etude">
        <div className="max-w padding">
          <div className="etude__content">
            <h1 className="title title-medium">Demande de devis</h1>

            {!formIsSelector.isSelect && (
              <div className="etude__select">
                <p>
                  Veuillez choisir votre catégorie afin d’accédé au formulaire
                </p>

                <div className="etude-formSelect">
                  <label className="form__label title" htmlFor="form_selector">
                    Catégorie de produit
                  </label>
                  <select
                    className="form__input form__select"
                    name="form_selector"
                    id="form_selector"
                    onChange={(value) => {
                      console.log(value.target.value);
                      setFormIsSelector({
                        isSelect: true,
                        id: parseInt(value.target.value),
                      });
                    }}
                  >
                    <option value={0} className="inputSelect">
                      Veuillez choisir votre catégorie
                    </option>

                    {formulaire.map((form: apiFormulaire, index: number) => {
                      return (
                        <option value={index} key={form.id + "-form-selector"}>
                          {form.titre}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <p>
                  Répondre au formulaire servira à augmenter la rapidité de la
                  prise de rendez-vous et de la création du devis.
                </p>
                <p>
                  Vous vouliez juste nous envoyer un message{" "}
                  <a href="#" title="Buttton qui renvoie vers la page contact">contactez nous ici</a>.
                </p>
              </div>
            )}
            {formIsSelector.isSelect? (

            <FormResponse status={formStatus}>

              <form className="etude-form" onSubmit={(e) => {
                submit(e, setFormStatus, setFormIsSubmit)
              }} action="https://formspree.io/f/mbjejwdo" method="POST">
                <div className="etude-form">
                  <p className="title">{formulaire[formIsSelector.id].titre}</p>
                  {formulaire[formIsSelector.id].form.map(
                    (form: any, index: number) => {
                      if (formNumber.numberForm === 0) {
                        setFormNumber({
                          numberForm: formulaire[formIsSelector.id].form.length,
                          curentForm: index - 1,
                        });
                      }
                      return (
                        <div key={index + "-Etude"} >

                          <div key={index + "-form"} className="form-opacity etude-formInfo">

                            {form.inputs.map((input: any, _index: number) => {
                              return (
                                <div key={_index + "-input"}>
                                  <label
                                    hidden={formNumber.curentForm !== index}

                                    className="form__label title"
                                    htmlFor={_index + "-" + input.nom}
                                  >
                                    {input.label}
                                  </label>
                                  {input.type === "text" && (
                                    <input
                                      className="form__input"
                                      hidden={formNumber.curentForm !== index}
                                      type="text"
                                      value={curentForm[input.nom] !== null && curentForm[input.nom] !== undefined ? curentForm[input.nom] : ""}
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        const nexForm = { ...curentForm };
                                        nexForm[input.nom] = value;
                                        setCurentForm(nexForm);
                                      }}
                                      name={input.nom}
                                      id={_index + "-" + input.nom}
                                      placeholder={input.placeholder}
                                    />
                                  )}
                                  {input.type === "textarea" && (
                                    <textarea
                                      className="form__input"
                                      hidden={formNumber.curentForm !== index}

                                      name={input.nom}
                                      value={curentForm[input.nom] !== null && curentForm[input.nom] !== undefined ? curentForm[input.nom] : ""}
                                      onChange={(e) => {
                                        setCurentForm({
                                          ...curentForm,
                                          [input.nom]: e.target.value,
                                        })
                                      }}
                                      id={_index + "-" + input.nom}
                                      placeholder={input.placeholder}
                                    />
                                  )}
                                  {input.type === "select" && (
                                    <select
                                      hidden={formNumber.curentForm !== index}

                                      name={input.nom}
                                      id={_index + "-" + input.nom}
                                      value={curentForm[input.nom] !== null && curentForm[input.nom] !== undefined ? curentForm[input.nom] : 0}
                                      onChange={(e) => {
                                        setCurentForm({
                                          ...curentForm,
                                          [input.nom]: e.target.value,
                                        })
                                      }}
                                      className="form__input form__select"
                                    >
                                      <option value={0} className="inputSelect">
                                        Veuillez choisir une option
                                      </option>
                                      {input.options?.map(
                                        (option: any, index: number) => {
                                          return (
                                            <option
                                              className="form__input"
                                              value={input.label + "/" + option.value}
                                              key={index + "-option"}
                                            >
                                              {option.text}
                                            </option>
                                          );
                                        }
                                      )}
                                    </select>
                                  )}
                                </div>
                              );
                            })}


                          </div>

                        </div>
                      );
                    }
                  )}
                </div>
                <div className="etude__btn">
                  <button
                    type="button"
                    className="btn"
                    style={
                      formNumber.curentForm === 0
                        ? {
                          backgroundColor:
                            "var(--links-off-color)",
                        }
                        : {
                          backgroundColor:
                            "var(--links-primary-color)",
                        }
                    }
                    onClick={() => {
                      if (formNumber.curentForm > 0) {
                        setFormNumber({
                          numberForm: formNumber.numberForm,
                          curentForm: formNumber.curentForm - 1,
                        });
                      }
                    }}
                  >
                    Retour en arrière
                  </button>
                  <button
                    type="button"
                    className="btn"
                    style={
                      formNumber.curentForm ===
                        formNumber.numberForm - 1
                        ? {
                          backgroundColor:
                            "var(--links-off-color)",
                        }
                        : {
                          backgroundColor:
                            "var(--links-primary-color)",
                        }
                    }
                    onClick={() => {
                      if (
                        formNumber.curentForm <
                        formNumber.numberForm - 1
                      ) {
                        setFormNumber({
                          numberForm: formNumber.numberForm,
                          curentForm: formNumber.curentForm + 1,
                        });
                      }
                    }}
                  >
                    Suivant
                  </button>
                  {
                    formNumber.curentForm === formNumber.numberForm - 1 && (
                      <button className="btn" type="submit">
                        Envoyer
                      </button>
                    )
                  }
                </div>
              </form>
              </FormResponse>
            ):<ActivityIndicator visible={formIsSubmit}/>}
          </div>
        </div>
      </main>
    </>
  );
}

function submit(event: React.FormEvent<HTMLFormElement>,
setStatus: (status:"sucess" | "error" | "noSubmit")=> void,
setFormIsSubmit:(value: boolean)=>void
)

 {
  event.preventDefault();
  setFormIsSubmit(true)
  const inputs = event.currentTarget.querySelectorAll("input");
  const textarea = event.currentTarget.querySelectorAll("textarea");
  const selects = event.currentTarget.querySelectorAll("select");

  let headerMessage: string = ""

  inputs.forEach((input) => {

    headerMessage += `${input.placeholder} : ${input.value} \n`;
  });

  let email = ""
  inputs.forEach((input) => {
    if (input.type === "email") {
      email = input.value
    }
  })

  selects.forEach((select) => {
    let options = select.value.split("/");
    headerMessage += `${options[0]} : ${options[1]} \n`;
  })

  textarea.forEach((_textarea) => {
    headerMessage += `${_textarea.placeholder} : ${_textarea.value} \n`;
  });



  const formData = new FormData();
  formData.append("email", email);
  formData.append("message", headerMessage);

  fetch("https://formspree.io/f/mbjejwdo", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }

  }).then((response) => {

    if (response.status === 200) {
      setStatus("sucess")
      setFormIsSubmit(false)

    }
  }).catch((error) => {
    setStatus("error")
    setFormIsSubmit(false)
  });


}
