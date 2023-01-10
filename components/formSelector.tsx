import { type } from "os";
import React, { useEffect, useState } from "react";
import { apiFormulaire } from "../util/apiRequest";

interface selectorType {
    isSelect: boolean
    id: number
}

interface Props {
    setFormIsSelector: (value: selectorType) => void
    formulaire: apiFormulaire[]
}

export default function FormSelector({ setFormIsSelector, formulaire }: Props) {

    const [_formulaire, set_formulaire] = useState<apiFormulaire[]>(formulaire)

    useEffect(() => {
        set_formulaire(formulaire)
    }, [formulaire])

    return (
        <>
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

                        {_formulaire.map((form: apiFormulaire, index: number) => {
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
        </>
    )

}  