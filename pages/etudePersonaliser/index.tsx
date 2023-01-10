import { Button } from "@mui/material";
import Head from "next/head";
import { off } from "process";
import React, { useEffect, useState } from "react";
import { FormEtudeNavigation, FormResponse, FormSelector, InputFormGenerator } from "../../components";
import ActivityIndicator from "../../components/ActivityIndicator";
import { apiFormulaire, GetAllFormulaire, inputFormulaireApi } from "../../util/apiRequest";
import { validateEmail, validateName, validateTextInput } from "../../util/function";

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
  const [formIsSubmit, setFormIsSubmit] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string>("")

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
              <FormSelector
                setFormIsSelector={setFormIsSelector}
                formulaire={formulaire}
              />
            )}
            {formIsSelector.isSelect && !formIsSubmit ? (

              <FormResponse status={formStatus}>
                <h2 style={{
                  color: "red",
                  fontSize: "1.5rem",
                }}>{errorMessages}</h2>
                <form className="etude-form" onSubmit={(e) => { submit(e, setFormStatus, setFormIsSubmit, setErrorMessages) }}>
                  <div className="etude-form">
                    <p className="title">{formulaire[formIsSelector.id].titre}</p>
                    {formulaire[formIsSelector.id].form.map((inputList: { inputs: inputFormulaireApi[] }, indexCurentForm: number) => {

                      if (formNumber.numberForm === 0) {
                        setFormNumber({
                          numberForm: formulaire[formIsSelector.id].form.length,
                          curentForm: indexCurentForm - 1,
                        });
                      }
                      return (
                        <div key={indexCurentForm + "-Etude"} >

                          <div key={indexCurentForm + "-form"} className="form-opacity etude-formInfo">

                            <InputFormGenerator
                              inputList={inputList}
                              formNumber={formNumber}
                              indexCurentForm={indexCurentForm}
                              curentForm={curentForm}
                              setCurentForm={setCurentForm}
                            />

                          </div>

                        </div>
                      );
                    }
                    )}
                  </div>
                  <FormEtudeNavigation
                    formNumber={formNumber}
                    setFormNumber={setFormNumber}
                  />
                </form>
              </FormResponse>
            ) : <ActivityIndicator visible={formIsSubmit} />}
          </div>
        </div>
      </main>
    </>
  );
}

function submit(event: React.FormEvent<HTMLFormElement>,

  setStatus: (status: "sucess" | "error" | "noSubmit") => void,
  setFormIsSubmit: (value: boolean) => void,
  setErrorMessages: (value: string) => void,

) {
  event.preventDefault();

  setFormIsSubmit(true)
  const inputs = event.currentTarget.querySelectorAll("input");
  const textarea = event.currentTarget.querySelectorAll("textarea");
  const selects = event.currentTarget.querySelectorAll("select");

  let headerMessage: string = ""
  let ValidationFormError: string = ""

  console.log("FORM SUBMIT");

  inputs.forEach((input) => {

    headerMessage += `${input.placeholder} : ${input.value} \n`;

    if (input.type === "email") {
      const r = validateEmail(input.value)
      if (r !== "") {
        ValidationFormError = r

      }
    }



    if (input.type === "text") {
      const r = validateTextInput(input.value)
      if (r !== "") {
        console.log(input);
        ValidationFormError = r

      }
    }



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

  if (ValidationFormError !== "") {
    setErrorMessages(ValidationFormError)
    setFormIsSubmit(false)
    return
  }

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
