import React from "react";
import { projects } from "./data";
import {
  FaArrowAltCircleRight,
  FaGithub,
  FaLocationArrow,
  FaLongArrowAltUp,
  FaShoppingCart,
} from "react-icons/fa";

function Works() {
  console.log(projects);
  return (
    <div className="projects__container container">
      {projects.map((project) => (
        <div className="project__card">
          <div className="project__information">
            <p className="project__years">{project.years}</p>
            <h1 className="project__title">
              {project.title}{" "}
              <span className="project__icon">
                <FaLocationArrow>
                  <a href={project.live}>live</a>
                </FaLocationArrow>
              </span>{" "}
            </h1>
            <p className="project__description">{project.description}</p>
            <div className="project__technologies">
              {project.technologies.map((item) => (
                <p className="project__technologies--item">{item}</p>
              ))}
            </div>
          </div>
          <div className="project__image">{project.image}</div>
        </div>
      ))}
    </div>
  );
}

export default Works;
