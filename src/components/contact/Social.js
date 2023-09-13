import React from "react";
import { FaGithub, FaLinkedinIn, FaMailBulk, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <div className="contact__social">
      <a href="https://twitter.com/mt_alejo_" className="contact__social--item">
        <FaTwitter />
        <p>@mt_alejo_</p>
      </a>
      <a
        href="https://github.com/lobato-code"
        className="contact__social--item"
      >
        {" "}
        <FaGithub />
        <p>@lobato-code</p>
      </a>
      <a
        href="https://www.linkedin.com/in/ariel-alejandro-calderon/"
        className="contact__social--item"
      >
        {" "}
        <FaLinkedinIn />
        <p>Ariel Alejandro Calderon</p>
      </a>

      <a
        href="mailto:mt.calderon.alejandro@gmail.com"
        className="contact__social--item"
      >
        {" "}
        <FaMailBulk />
        <p> mt.calderon.alejandro@gmail.com</p>
      </a>
    </div>
  );
}

export default Social;
