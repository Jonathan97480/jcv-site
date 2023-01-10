import Link from "next/link";
import React from "react";

interface props {
  children: React.ReactNode
  status: "sucess" | "error" | "noSubmit";
}

export default function FormResponse({ status = "noSubmit", children }: props) {
  return (
    <>
      { status !== "noSubmit"? <div className="notification" style={{backgroundColor: status=== "sucess"? '#6BBB8B': '#C1454D'}}>
        {status === "sucess" ? (
          <p>
            Merci votre message a bien étais envoyé, Nous vous répondrons dans
            les plus bref délais.
          </p>
        ) : (
          <p>
            Une erreur est survenue lors de l'envoi de votre message, veuillez
            réessayer plus tard.
          </p>
        )}
        <Link href={"/"}>Retourner à la page d'accueil</Link>
      </div>:{children}}
    </>
  );
}
