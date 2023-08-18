import Data from "./Data";
import "./about.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <h1 className="about__title">About me</h1>
        <p className="about__subtitle">My introduccion</p>
        <Data />
      </div>
    </section>
  );
}

export default About;
