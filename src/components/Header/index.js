import React from "react";
import "./Header.scss";
import comp from "../assets/komp.svg";
import { Link } from "react-scroll";
import Particles from "../ParticleComponent";

const Header = (props) => {
  return (
    <div className="header-content" id="home">
      <div className="header-spacer"></div>
      <Particles />
      <header>
        <div>
          <div className="title-text">
            <h1> {props.title} </h1>
            <p>
              I'm Mikołaj and i would like to introduce you to world which is my
              passion...
            </p>
          </div>
          <p className="bottom-text">JS / CSS / React / PHP</p>
        </div>

        <img className="img-comp" src={comp} alt="computer" />
        <Link
          activeClass="active-links"
          to="about"
          spy={true}
          smooth={true}
          offset={-86}
          duration={100}
        >
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
        </Link>
      </header>
    </div>
  );
};

export default Header;
