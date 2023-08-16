import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <ul className="social__list">
      <li className="social__item">
        <a href=""></a>
        <FaGithub />
      </li>
      <li className="social__item">
        <a href=""></a>
        <FaLinkedin />
      </li>
      <li className="social__item">
        <a href=""></a>
        <FaTwitter />
      </li>
    </ul>
  );
}

export default Social;
