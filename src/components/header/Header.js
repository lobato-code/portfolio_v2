import { useState } from "react";
import "./header.css";
import {
  FaBars,
  FaBuffer,
  FaChevronDown,
  FaHome,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Ariel Alejandro
        </a>
        <div className={open ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a className="nav__link active-link" href="#home">
                <FaHome className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about">
                <FaUserAlt className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#skills">
                <FaTools className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#projects">
                <FaBuffer className="nav__icon" />
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contact">
                <VscSend className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" onClick={() => setOpen(!open)}>
            <FaChevronDown />
          </div>
        </div>
        <div className="nav__toggle" onClick={() => setOpen(!open)}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
}

export default Header;
