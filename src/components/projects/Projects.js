import Works from "./Works";
import "./projects.css";
function Projects() {
  return (
    <section className="projects section" id="projects">
      <h1 className="projects__title">Portfolio</h1>
      <p className="projects__subtitle">Most recent works</p>

      <Works />
    </section>
  );
}

export default Projects;
