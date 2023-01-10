import Link from "next/link";
import React, { useEffect, useState } from "react";

interface props {
  children: React.ReactNode;
  status: "sucess" | "error" | "noSubmit";
}

export default function FormResponse({ status = "noSubmit", children }: props) {
  const [newStatus, setNewStatus] = useState<"sucess" | "error" | "noSubmit">(
    status
  );
  

  useEffect(() => {
    setNewStatus(status);
  }, [status]);

  return (
    <>
      {newStatus !== "noSubmit" ? (
        <div>
          <div
            className="formResponse"
            style={{
              backgroundColor: newStatus === "sucess" ? "#6BBB8B" : "#C1454D",
            }}
          >
            {newStatus === "sucess" ? (
              <p>
                Merci votre message a bien étais envoyé, Nous vous répondrons
                dans les plus bref délais.
              </p>
            ) : (
              <p>
                Une erreur est survenue lors de l'envoi de votre message,
                veuillez réessayer plus tard.
              </p>
            )}
           
          </div>{" "}
          <Link href={"/"} className="formResponse__btn">
              Retourner à la page d'accueil
            </Link>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
