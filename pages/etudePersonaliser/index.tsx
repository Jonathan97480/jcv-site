import { Button } from "@mui/material";
import Head from "next/head";
import React, { useEffect } from "react";
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
            {formIsSelector.isSelect && (
              <div>
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
                      <>
                        {formNumber.curentForm === index && (
                          <div key={index + "-form"} className="form-opacity">
                            <form className="etude-form">
                              {form.inputs.map((input: any, index: number) => {
                                return (
                                  <div key={index + "-input"}>
                                    <label
                                      className="form__label title"
                                      htmlFor={input.label}
                                    >
                                      {input.label}
                                    </label>
                                    {input.type === "text" && (
                                      <input
                                        className="form__input"
                                        type="text"
                                        name={input.label}
                                        id={input.label}
                                        placeholder={input.placeholder}
                                      />
                                    )}
                                    {input.type === "textarea" && (
                                      <textarea
                                        className="form__input"
                                        name={input.label}
                                        id={input.label}
                                        placeholder={input.placeholder}
                                      />
                                    )}
                                    {input.type === "select" && (
                                      <select
                                        name={input.label}
                                        id={input.label}
                                        className="form__input form__select"
                                      >
                                        {input.options?.map(
                                          (option: any, index: number) => {
                                            return (
                                              <option
                                                className="form__input"
                                                value={option.value}
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
                            </form>
                            <div className="etude__btn">
                              <button
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
                            </div>
                          </div>
                        )}
                      </>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
