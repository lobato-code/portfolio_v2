import "./home.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <div className="home__social">
      <a
        className="home__social-item"
        href="https://github.com/mt-alejo"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        className="home__social-item"
        href="https://www.linkedin.com/in/ariel-alejandro-calderon"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        className="home__social-item"
        href="https://twitter.com/mt_alejo_"
        target="_blank"
      >
        <FaTwitter />
      </a>
    </div>
  );
}

export default Social;
