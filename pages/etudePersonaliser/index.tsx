import React from 'react';


interface EtudeProps {
    navigation: any;
}

export default function Etude({ navigation }: EtudeProps) {



    return (
        <main>
            <h1>Demande de devis</h1>
            <p>Veuillez choisir votre catégorie afin d’accédé au formulaire</p>

            <div>
                <label htmlFor="">Catégorie de produit</label>
                <input type="text" />
            </div>

        </main>
    )
}