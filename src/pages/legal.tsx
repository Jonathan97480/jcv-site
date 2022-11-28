import React from "react";

export default function Legal() {
  return (
    <section className="legal">
      <div className="legal__content max-w padding">
          <h1 className="title">Mentions légales</h1>
        <div className="legal__contentInfo">
          <h2 className="title">JCV CONSULTING</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit
            faucibus nulla urna dignissim massa sed adipiscing sed odio.
            Vulputate tellus elit augue velit lobortis morbi gravida massa
            facilisi. Magna auctor a dui vel gravida fringilla mauris habitant.
            Tristique cursus dolor id orci dictum. Dui condimentum vitae
            scelerisque blandit. Vulputate amet neque iaculis cras. Dis leo
            felis rutrum elit aliquam quisque malesuada. Elit sit ligula eget
            tristique. Eget urna, tellus ac nisl. Fermentum dui vitae lacus,
            quis purus sodales pharetra mauris. Risus augue diam scelerisque
            commodo feugiat sapien donec egestas. Risus commodo duis aliquet
            fermentum diam. Sit rhoncus amet, in adipiscing bibendum vitae dis.
            Est tortor id cras quis.
          </p>
        </div>
        <div className="legal__contentInfo">
          <h2 className="title">Décline toute responsabilité</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit
            faucibus nulla urna dignissim massa sed adipiscing sed odio.
            Vulputate tellus elit augue velit lobortis morbi gravida massa
            facilisi. Magna auctor a dui vel gravida fringilla mauris habitant.
            Tristique cursus dolor id orci dictum. Dui condimentum vitae
            scelerisque blandit. Vulputate amet neque iaculis cras. Dis leo
            felis rutrum elit aliquam quisque malesuada. Elit sit ligula eget
            tristique. Eget urna, tellus ac nisl. Fermentum dui vitae lacus,
            quis purus sodales pharetra mauris. Risus augue diam scelerisque
            commodo feugiat sapien donec egestas. Risus commodo duis aliquet
            fermentum diam. Sit rhoncus amet, in adipiscing bibendum vitae dis.
            Est tortor id cras quis.
          </p>
        </div>{" "}
        <div className="legal__contentInfo">
          <h2 className="title">Politique de contenu du site</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit
            faucibus nulla urna dignissim massa sed adipiscing sed odio.
            Vulputate tellus elit augue velit lobortis morbi gravida massa
            facilisi. Magna auctor a dui vel gravida fringilla mauris habitant.
            Tristique cursus dolor id orci dictum. Dui condimentum vitae
            scelerisque blandit. Vulputate amet neque iaculis cras. Dis leo
            felis rutrum elit aliquam quisque malesuada. Elit sit ligula eget
            tristique. Eget urna, tellus ac nisl. Fermentum dui vitae lacus,
            quis purus sodales pharetra mauris. Risus augue diam scelerisque
            commodo feugiat sapien donec egestas. Risus commodo duis aliquet
            fermentum diam. Sit rhoncus amet, in adipiscing bibendum vitae dis.
            Est tortor id cras quis.
          </p>
        </div>{" "}
        <div className="legal__contentInfo">
          <h2 className="title">Information l’égale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit
            faucibus nulla urna dignissim massa sed adipiscing sed odio.
            Vulputate tellus elit augue velit lobortis morbi gravida massa
            facilisi. Magna auctor a dui vel gravida fringilla mauris habitant.
            Tristique cursus dolor id orci dictum. Dui condimentum vitae
            scelerisque blandit. Vulputate amet neque iaculis cras. Dis leo
            felis rutrum elit aliquam quisque malesuada. Elit sit ligula eget
            tristique. Eget urna, tellus ac nisl. Fermentum dui vitae lacus,
            quis purus sodales pharetra mauris. Risus augue diam scelerisque
            commodo feugiat sapien donec egestas. Risus commodo duis aliquet
            fermentum diam. Sit rhoncus amet, in adipiscing bibendum vitae dis.
            Est tortor id cras quis.
          </p>
        </div>
        <div className="legal__partner">
          <div className="legal__partnerImg">

            <img
              src={require("../img/logo_region.png")}
              alt="logo de la Région"
              width={215}
              height={101}
              loading='lazy'
            />

            <img
              src={require("../img/europe.png")}
              alt="logo de l'uniom Europe"
              width={134}
              height={101}
              loading='lazy'
            />
          </div>
          <p>
            Ce site a été financé à l’aide du FEDER dans le cadre de la réponse
            de l’Union européenne à la pandémie COVID-19. L’Europe s’engage à La
            Réunion
          </p>
        </div>
      </div>
    </section>
  );
}
