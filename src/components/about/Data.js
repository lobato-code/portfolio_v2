import React from "react";

function Data() {
  return (
    <div className="about__data">
      <div className="about__img"></div>{" "}
      <div className="about__description">
        <p>
          Ecuadorian self-taught developer dedicated to everything related to
          web development in general. I have experience using React, Express,
          and Mongo along with multiple web tools in the creation of personal
          projects and small practices. Always looking to implement best
          practices in every solution I implement, ensuring quality in my work.
        </p>
        <p>
          Currently, I am looking for new job opportunities that will challenge
          me and allow me to grow professionally. My diligence and
          responsibility are attributes that many companies would find
          attractive. I consider myself a proactive person when it comes to
          facing all kinds of problems and difficulties, learning to be more
          methodical when looking for and trying out different solutions.
        </p>
        <p className="mb-4">
          Technology is my path to the future, and my goal is to immerse myself
          in a competitive to immerse myself in a competitive environment that
          stimulates my continuous growth.
        </p>
        <button className="about__button button ">
          <a href="https://drive.google.com/file/d/1OoCRugKUvnOT-mrmKzXJjrgXYUsQ6m1K/view?usp=sharing">
            Download CV
          </a>{" "}
        </button>
      </div>
    </div>
  );
}

export default Data;
