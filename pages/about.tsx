import React from "react";
import Head from 'next/head'
import Image from "next/image";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="aboutPage">

                <div className="aboutPage__content padding max-w">
                    <h1>JCV Consult</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <Image
                        src={require("../img/About-pic.png")}
                        alt="Image de l'entreprise"
                        width={320}
                        height={180}
                        loading="lazy"

                    />

                    <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus vitae ornare eu
                        mattis pellentesque morbi et duis condimentum. Sollicitudin risus enim
                        felis nunc vitae. Hac molestie feugiat ipsum faucibus tempor vulputate
                        eu. Ac sed interdum cursus proin. Lorem ipsum dolor sit amet
                        consectetur. Faucibus vitae ornare eu mattis pellentesque morbi et
                        duis condimentum. Sollicitudin risus enim felis nunc vitae. Hac
                        molestie feugiat ipsum faucibus tempor vulputate eu. Ac sed interdum
                        cursus proin.{" "}
                    </p>
                </div>
            </div>
        </>
    )
}

