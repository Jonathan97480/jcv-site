import React from "react";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="aboutPage__content padding max-w">
        <h1>JCV Consulting</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <img
          src={require("../img/About-pic.png")}
          alt=""
          width={320}
          height={180}
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
  );
}
