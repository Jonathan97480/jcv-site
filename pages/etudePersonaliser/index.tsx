import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { apiFormulaire, GetAllFormulaire } from '../../util/apiRequest';


interface EtudeProps {
    navigation: any;
}

export default function Etude({ navigation }: EtudeProps) {

    const [formulaire, setFormulaire] = React.useState<apiFormulaire[]>([]);
    const [formIsSelector, setFormIsSelector] = React.useState<{ isSelect: boolean, id: number }>({ isSelect: false, id: 0 });
    const [formNumber, setFormNumber] = React.useState<{ numberForm: number, curentForm: number }>({ numberForm: 0, curentForm: 0 });

    useEffect(() => {
        GetAllFormulaire().then((_data: apiFormulaire[]) => {
            setFormulaire(_data);
        })

    }, [])


    return (
        <main>
            <h1>Demande de devis</h1>
            {
                !formIsSelector.isSelect &&
                <div >

                    <p>Veuillez choisir votre catégorie afin d’accédé au formulaire</p>

                    <div>
                        <label htmlFor="form_selector">Catégorie de produit</label>
                        <select name="form_selector" id="form_selector" onChange={(value) => {
                            console.log(value.target.value);
                            setFormIsSelector({ isSelect: true, id: parseInt(value.target.value) });

                        }}>
                            <option value={0}  >Veuillez choisir votre catégorie</option>

                            {formulaire.map((form: apiFormulaire, index: number) => {

                                return (
                                    <option value={index} key={form.id + "-form-selector"} >{form.titre}</option>
                                )
                            })}
                        </select>

                    </div>
                    <p>Répondre au formulaire servira à augmenter la rapidité de la prise de rendez-vous et de la création du devis.</p>
                    <p>Vous vouliez juste nous envoyer un message <a href='#'>contactez nous ici</a>.</p>
                </div>
            }
            {
                formIsSelector.isSelect &&
                <div>
                    <p>{formulaire[formIsSelector.id].titre}</p>
                    {
                        formulaire[formIsSelector.id].form.map((form: any, index: number) => {
                            if (formNumber.numberForm === 0) {
                                setFormNumber({ numberForm: formulaire[formIsSelector.id].form.length, curentForm: index - 1 })
                            }
                            return (
                                <>
                                    {
                                        formNumber.curentForm === index &&
                                        <div key={index + "-form"}>
                                            <form>
                                                {
                                                    form.inputs.map((input: any, index: number) => {
                                                        return (


                                                            <div key={index + "-input"}>
                                                                <label htmlFor={input.label}>{input.label}</label>
                                                                {
                                                                    input.type === "text" &&
                                                                    <input className='form-input' type="text" name={input.label} id={input.label} placeholder={input.placeholder} />
                                                                }
                                                                {
                                                                    input.type === "textarea" &&
                                                                    <textarea className="contact__formInput" name={input.label} id={input.label} placeholder={input.placeholder} />
                                                                }
                                                                {
                                                                    input.type === "select" &&
                                                                    <select name={input.label} id={input.label}>
                                                                        {
                                                                            input.options?.map((option: any, index: number) => {
                                                                                return (
                                                                                    <option value={option.value} key={index + "-option"}>{option.text}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                }
                                                            </div>


                                                        )
                                                    })
                                                }

                                            </form>
                                            <Button
                                                disabled={formNumber.curentForm === 0}
                                                onClick={() => {
                                                    if (formNumber.curentForm > 0) {
                                                        setFormNumber({ numberForm: formNumber.numberForm, curentForm: formNumber.curentForm - 1 })
                                                    }
                                                }}
                                            >
                                                Retour en arrière
                                            </Button>
                                            <Button
                                                disabled={formNumber.curentForm === formNumber.numberForm - 1}
                                                onClick={() => {
                                                    if (formNumber.curentForm < formNumber.numberForm - 1) {
                                                        setFormNumber({ numberForm: formNumber.numberForm, curentForm: formNumber.curentForm + 1 })
                                                    }
                                                }}
                                            >
                                                Suivant
                                            </Button>
                                        </div>}
                                </>
                            )
                        })

                    }

                </div>
            }

        </main>
    )
}