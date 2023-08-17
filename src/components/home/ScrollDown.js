import React from "react";
import { BsArrowDownShort, BsMouse } from "react-icons/bs";
function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <BsMouse className="home_scroll-mouse" />
        <span className="home__scroll-name">Scroll Down</span>
        <BsArrowDownShort className="home__scroll-arrow" />
      </a>
    </div>
  );
}

export default ScrollDown;
