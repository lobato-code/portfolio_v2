import "./home.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <div className="home__social">
      <a className="home__social-item" href="" target="_blank">
        <FaGithub />
      </a>
      <a className="home__social-item" href="" target="_blank">
        <FaLinkedin />
      </a>
      <a className="home__social-item" href="" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
}

export default Social;
