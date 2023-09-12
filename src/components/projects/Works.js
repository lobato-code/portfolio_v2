import React from "react";
import { projects } from "./Data";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

function Works() {
  return (
    <div className="projects__container container">
      {projects.map((project) => (
        <div key={project.id} className="project__card">
          <div className="project__information">
            <p className="project__years">{project.years}</p>
            <h1 className="project__title">
              {project.title}
              <span>{" •-• "}</span>
              {project.product}
              <span className="project__icon">
                <FaLocationArrow>
                  <a href={project.live}>live</a>
                </FaLocationArrow>
              </span>{" "}
            </h1>
            <p className="project__description">{project.description}</p>
            <div className="project__technologies">
              {project.technologies.map((item) => (
                <p key={item} className="project__technologies--item">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="project__image">{project.image}</div>
          <a href={project.repo} className="project__repo">
            <FaGithub />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Works;
