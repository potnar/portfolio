import React from "react";
import "./Header.scss";
import comp from "../assets/komp.svg";

const Header = props => {
  return (
    <div className="header-content">
      <div className="header-spacer"></div>
      <header>
        <div className="title-text">
          <h1> {props.title} </h1>

          <p>
            I'm Mikołaj and i would like to introduce you to world which is my
            passion...
          </p>
        </div>
        <img src={comp} alt="computer" />
        <a href="#content-section">
          <div id="arrowAnim">
            <div className="arrowSliding">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow"></div>
            </div>
          </div>
        </a>
      </header>
    </div>
  );
};

export default Header;
