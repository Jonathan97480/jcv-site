import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function FourOhFour() {
    return (
        <div>
            <Image src="../img/girl-oups.png" alt="404" width={580} height={440} />
            <div>
                <h1>Oups, voilà qui n'était pas prévu!</h1>
                <small>Erreur 404</small>
                <p>Désolé mais ce lien est introuvable! Dirigez-vous vers la page d'accueil ou contactez nous en cas de questions...</p>
                <div>
                    <Link href="/">
                        <a>Retour à la page d'accueil</a>
                    </Link>
                    <Link href="/contact">
                        <a>contactez nous</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}