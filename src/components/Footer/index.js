import React from "react";
import "./Footer.scss";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="container">
        <div className="col">
          <div className="socials">
            <IconContext.Provider value={{ className: "icons" }}>
              <a href="https://www.linkedin.com/in/mikołaj-cholewa-4b909573/">
                <AiOutlineLinkedin size="1.6rem" />
              </a>
              <a href="https://github.com/potnar">
                <AiOutlineGithub size="1.6rem" />
              </a>
              <a href="https://pl-pl.facebook.com/people/Miko%C5%82aj-Cholewa/100000746907733/">
                <AiOutlineFacebook size="1.6rem" />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="col">
          <div className="links">
            <h3>Portfolio:</h3>
            <p>
              <a href="https://github.com/potnar/portfolio">
                github.com/potnar/portfolio
              </a>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="address">
            <h3>Mikołaj Cholewa</h3>
            <p>Warsaw</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
