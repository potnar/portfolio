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
        <img src={comp} />
        <a href="#content-section">
          <div id="arrowAnim">
            <div class="arrowSliding">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay1">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay2">
              <div class="arrow"></div>
            </div>
          </div>
        </a>
      </header>
    </div>
  );
};

export default Header;
