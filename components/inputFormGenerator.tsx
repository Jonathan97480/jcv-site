import React, { useEffect, useState } from "react";
import { inputFormulaireApi } from "../util/apiRequest";

interface Props {
    inputList: { inputs: inputFormulaireApi[] }
    formNumber: any
    indexCurentForm: number
    curentForm: any
    setCurentForm: any
}

export default function InputFormGenerator({ inputList, formNumber, indexCurentForm, curentForm, setCurentForm }: Props) {


    return (
        <>
            {inputList.inputs.map((input: any, _index: number) => {
                return (
                    <div key={_index + "-input"} style={{ display: formNumber.curentForm !== indexCurentForm ? "none" : "inline-flex" }} className="etude-formInfo" >
                        <label
                            hidden={formNumber.curentForm !== indexCurentForm}

                            className="form__label title"
                            htmlFor={_index + "-" + input.nom}
                        >
                            {input.label}
                        </label>
                        {input.type === "text" && (
                            <input
                                className="form__input"
                                hidden={formNumber.curentForm !== indexCurentForm}

                                type={input.nom === "email" ? "email" : "text"}
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
                                hidden={formNumber.curentForm !== indexCurentForm}
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
                                hidden={formNumber.curentForm !== indexCurentForm}


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

        </>
    )
}
