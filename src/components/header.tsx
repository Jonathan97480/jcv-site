import React, { useState } from "react";
import { Link } from "react-router-dom";





export default function Header() {


    return (
        <header className="header" >

            <div>
                <img src={require('../img/logo-jcv.png')} alt="" />
            </div>

            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <span>Service <img src={require('../img/list-icon.svg')} alt="" /></span>
                    <ul>
                        <li>Chauffe-eau</li>
                        <li>Photovoltaïque</li>
                        <li>Sécurité</li>
                    </ul>
                    <li>
                        <Link to="/contact">Demander un devis</Link>
                    </li>
                </ul>
            </nav>
            <span>0262&nbsp;01 &nbsp;02&nbsp;03</span>
        </header>
    );
}


