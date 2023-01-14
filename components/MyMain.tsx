import React, { useEffect } from "react";
import { closeHeader } from "../slice/headerStatu.Slice";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";



interface Props {
    children: React.ReactNode;
    className?: string;
    pageTitle: string;
    pageDescription: string;
}



export default function MyMain({ children, className, pageTitle, pageDescription }: Props) {

    const HeaderRedux = useSelector((state: any) => state.Header);
    const dispatch = useDispatch();




    const headerClose = () => {
        if (HeaderRedux.isOPen) {
            dispatch(closeHeader(false))
        }
    }


    useEffect(() => {

        window.addEventListener("load", () => {
            const curentID = window.location.href.split("#")[1];
            if (curentID) {
                setTimeout(() => {
                    const curentElement = document.getElementById(curentID);
                    if (curentElement) {

                        curentElement.scrollIntoView();
                    }
                }, 1000);

            }
        });

        return () => {
            window.removeEventListener("load", () => { });
        }

    }, [])

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content={pageDescription}
                />
                <meta name="og:title" content={pageTitle} />
                <meta
                    property="og:description"
                    content={pageDescription}
                />
                <meta property="og:image" content="../img/logo-jcv.png" />
            </Head>
            <div onClick={headerClose} className={className}>
                {children}

            </div>
        </>
    );


}

