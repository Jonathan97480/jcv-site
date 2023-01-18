import React from "react";

export default function Rgpd() {
  return (
    <>
      <div className="rgpd">

        <div className="rgpdContent max-w">

          <p className="rgpdContent__txt">
            Ce site utilise des cookies pour vous offrir le meilleur des
            services, refuser ne vous empêchera pas de visiter le site.
          </p>

          <div className="rgpdContent__btn">
            <button className="btn">Accepter</button>
            <button className="btn btn-secondary">Refuser</button>
          </div>

        </div>
      </div>
    </>
  );
}
