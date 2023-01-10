import React from "react";


interface Props {
    formNumber: {
        numberForm: number;
        curentForm: number;
    }
    setFormNumber: (value: {
        numberForm: number;
        curentForm: number;
    }) => void

}

export default function FormEtudeNavigation({ formNumber, setFormNumber }: Props) {

    return (
        <>
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
        </>
    )
}