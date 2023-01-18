import React, { useEffect } from "react";

interface Props {
  setCookies: (value: boolean) => void;
  getCookies: () => boolean;
}

export default function Rgpd({ setCookies, getCookies }: Props) {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    const value = getCookies();
    console.log(value);
    setShow(value);

  }, []);

  return (
    <>
      {!show &&
        <div className="rgpd">

          <div className="rgpdContent max-w">

            <p className="rgpdContent__txt">
              Ce site utilise des cookies pour vous offrir le meilleur des
              services, refuser ne vous empêchera pas de visiter le site.
            </p>

            <div className="rgpdContent__btn">
              <button
                onClick={() => setMyCookies(true)}
                className="btn">Accepter</button>
              <button className="btn btn-secondary"
                onClick={() => setMyCookies(false)}
              >Refuser</button>
            </div>

          </div>
        </div>
      }
    </>
  );

  function setMyCookies(value: boolean) {
    setCookies(value);
    setShow(true);

  }
}

