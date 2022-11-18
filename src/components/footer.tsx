import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="footer">


            <div>
                <img src={require('../img/logo-jcv.png')} alt="" />
                <div>
                    <span>Liens rapide</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                </div>
                <div>
                    <span>Themes</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                </div>
                <div>
                    <span>Information</span>
                    <span>06 92 01 02 03</span>
                    <span>JCV@gmail.com</span>
                    <span>La reunion 97410</span>
                </div>
                <div>
                    <span>Suivez moi</span>
                    <img src={require('../img/facebook-logo.svg')} alt="" />
                </div>
            </div>
            <section>
                <span>
                    <img src={require('../img/logo_region.png')} alt="" />
                    <img src={require('../img/europe.png')} alt="" />
                </span>
                <span>
                    Copyright JCV Consulting 2022
                </span>
                <span>
                    {/* TODO: add switch Theme Dark Light */}
                </span>
            </section>
        </footer>
    );
}
