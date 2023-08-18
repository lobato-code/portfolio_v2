import React from "react";
import { projects } from "./data";
import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";

function Works() {
  console.log(projects);
  return (
    <div className="projects__container container grid">
      {projects.map((project) => (
        <div key={project.id} className="project__card">
          <img src={project.image} alt="" className="project__img" />
          <div className="projects__bottom">
            <p className="project__title">{project.title}</p>
            <a className="projects__bottom--item" href={project.repo}>
              <FaGithub />
            </a>
            <a className="projects__bottom--item" href={project.live}>
              <FaArrowAltCircleRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;
