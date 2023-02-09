import React from "react";
import Image from "next/image";
import { MyMain } from "../components";

export default function Legal() {
  return (
    <MyMain
      pageTitle="Mentions légales"
      pageDescription="La page qui contient les mentions légales de JCV Consult."
    >
      <div className=" legal padding max-w">
        <h1 className="title title-medium">Mentions légales</h1>

        <h2 className="title title-small">Le site</h2>
        <p>
          Le site JVC Consult a pour objet de fournir des informations sur le
          produit proposé par la société JVC Consult, qui propose le
          développement et la distribution de solutions digitales innovantes à
          destination des professionnels et particuliers.
        </p>

        <p>
          Le présent site internet est la propriété de la société JVC Consult,
          n° de tva FR52888299500
        </p>
        <p>
          JVC Consult ne garantit en aucune façon l’exactitude, la précision ou
          l’exhaustivité des informations mises à disposition sur ce site, y
          compris l’ensemble des hyperliens ou toute autre liaison informatique
          utilisée, directement ou indirectement, à partir de ce site. Les
          photos présentées sur le site JVC Consult sont non contractuelles. La
          société JVC Consult s’efforce d’assurer la fiabilité de l’ensemble des
          informations diffusées sur ce site, dont elle se réserve le droit de
          modifier ou de corriger, à tout moment et sans préavis, le contenu.
        </p>
        <div className="legal__block">
          <h2 className="title title-small">Décline toute responsabilité</h2>
          <p>
            Pour toute imprécision, inexactitude ou omission portant sur des
            informations disponibles sur le site. Pour tout dommage susceptible
            de résulter du crédit accordé à ces informations, de leur
            utilisation ou de l’utilisation d’un produit ou service auquel elles
            font référence.
          </p>

          <p>
            Et plus généralement pour tous dommages, directs ou indirects,
            quelles qu’en soient les causes, origines, natures et conséquences,
            provoquées à raison de l’accès de quiconque à ce site, de son usage
            ou de l’usage d’autres sites qui lui sont liés, de même que de
            l’impossibilité d’accéder à ce site. Les documents contenus dans ce
            site et chacun des éléments créés pour ce site sont soumis aux
            dispositions régissant le droit de la propriété intellectuelle.
          </p>
          <p>
            Aucune licence, ni aucun autre droit que celui de consulter ce site,
            n’est conféré à quiconque au regard de ces mêmes dispositions. La
            reproduction de tous documents publiés sur ce site est uniquement
            autorisée aux fins exclusives d’information pour un usage personnel
            et privé, toute reproduction et toute utilisation de copies
            réalisées à d’autres fins étant expressément interdite.
          </p>
          <p>
            Toute personne citée sur une page de ce site peut exercer ses droits
            d’accès, de modification, de rectification ou de suppression des
            informations le concernant.
          </p>
        </div>
        <div className="legal__block">
          <h2 className="title title-small">Politique de contenu du site</h2>
          <p>
            La structure générale, les textes, les animations au sens large du
            site Internet sont des propriétés de la société JVC Consult.
          </p>
          <p>
            Toute tentative de représentation totale ou partielle du site et de
            son contenu sans autorisation préalable de la société JVC Consult,
            est strictement interdite sous peine d’entrer en infraction avec le
            Code de la Propriété intellectuelle qui sanctionne les délits de
            contrefaçon.
          </p>
          <p>
            L’utilisateur s’engage à respecter les règles de propriété
            intellectuelle des divers contenus proposés sur notre site c’est à
            dire ne pas reproduire, modifier, altérer ou rediffuser, sans notre
            autorisation, quelque article, titre, applications, logiciels, logo,
            marque, information pour un usage autre que strictement privé, ce
            qui exclut toute reproduction à des fins professionnelles ou de
            diffusion en nombre.
          </p>
          <p>
            Ne pas recopier tout ou partie du site sur un autre site ou un
            réseau interne d’une entreprise.
          </p>
          <p>
            La violation de ces dispositions impératives soumet le contrevenant,
            et toutes personnes responsables, aux peines pénales et civiles
            prévues par la loi.
          </p>
        </div>

        <div className="legal__block">
          <h2 className="title title-small">
            Sécurité et confidentialité des informations personnelles
          </h2>
          <p>
            JVC Consult s’engage à assurer la sécurité des informations que les
            utilisateurs lui confient en ligne.
          </p>
          <p>
            {" "}
            JVC Consult considère la protection des données personnelles comme
            une priorité et garantit la sécurité des informations transmises
            dans une relation de confiance.
          </p>
          <p>
            JVC Consult s’engage à traiter les données personnelles de manière
            confidentielle et à ne diffuser aucune donnée susceptible de vous
            identifier.
          </p>
        </div>
        <div className="legal__block">
          <h2 className="title title-small">Images Crédit</h2>
          <p>
            <a href="https://fr.freepik.com/vecteurs-libre/erreur-404-illustration-concept-personne-fatiguee_20602777.htm#query=oups&position=6&from_view=search&track=sph">
              Image de storyset
            </a>{" "}
            sur Freepik
          </p>
        </div>
        <div className="legal__block">
          <h2 className="title title-small">Informations légales</h2>
          <p>JVC Consult </p>
          <p>273 CHE EDWARD SAVIGNY CYTISES N7 97432 SAINT-PIERRE Réunion</p>
          <p>N° SIRET : 88829950000015</p>
          <p>Directeur et éditeur de la publication :</p>
          <p>Monsieur Vitry Jean Christophe</p>
          <p>Téléphone : 0693815303</p>
          <p>Hébergeur du site : OVH SAS </p>
          <p>2 rue Kellermann – 59100 Roubaix – +33 (0)8 203 203 63</p>
          <p>http://www.ovh.fr/</p>
        </div>

        <div className="legal__block">
          <h2 className="title title-small">Les développeurs</h2>
          <p>
            Développeur Back-end :{" "}
            <a
              href="http://www.site.jon-dev.fr/"
              title="Redirige ver le site du développeur Back-end"
              target={"_blank"}
            >
              Jonathan Gauvin
            </a>
          </p>
          <p>
            Intégrateur Front-end et designer :{" "}
            <a
              href="https://tydevelopper.fr/"
              title="Redirige ver le site du développeur Front-end"
              target={"_blank"}
            >
              Teddy Equerre
            </a>
          </p>
          <p>
            Coordinateur :{" "}
            <a
              href="https://www.portfolio.runmyweb.re/"
              title="Redirige ver le site du Coordinateur"
              target={"_blank"}
            >
              Frédéric Morel
            </a>
          </p>
        </div>
        <div className="legal__region">
          <span className="legal__regionImg">
            <Image
              src={require("../img/logo_region.png")}
              alt=""
              width={87}
              height={41}
              loading="lazy"
            />
            <Image
              src={require("../img/europe.png")}
              alt=""
              width={67}
              height={51}
              loading="lazy"
            />
          </span>
          <p>
            Ce site a été financé à l’aide du FEDER (REACT-UE) dans le cadre de
            la réponse de l’Union européenne à la pandémie COVID-19. L’Europe
            s’engage à La Réunion.
          </p>
        </div>
      </div>
    </MyMain>
  );
}
