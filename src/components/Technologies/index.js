import React from "react";
import "./Technologies.scss";
import js_logo from "../assets/logo/js_logo.png";
import react_logo from "../assets/logo/react_logo.png";
import css3_logo from "../assets/logo/css3_logo.png";
import html5_logo from "../assets/logo/html5_logo.webp";
import php7_logo from "../assets/logo/php7_logo.png";
import code_logo from "../assets/logo/code_logo.png";
import TechnologiesContent from "./TechnologiesContent";

const Technologies = () => {
  return (
    <div className="container-technologies">
      <nav>Technologies</nav>
      <section>
        <div className="container">
          <picture>
            <TechnologiesContent icon={js_logo} progressValue={60} />
          </picture>
          <article>
            <p>JavaScript</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
        <div className="container">
          <article>
            <p>REACT</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <picture>
            <TechnologiesContent icon={react_logo} progressValue={30} />
          </picture>
        </div>
        <div className="container">
          <picture>
            <TechnologiesContent icon={html5_logo} progressValue={70} />
          </picture>
          <article>
            <p>HTML5</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
        <div className="container">
          <article>
            <p>CSS3</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <picture>
            <TechnologiesContent icon={css3_logo} progressValue={70} />
          </picture>
        </div>
        <div className="container">
          <picture>
            <TechnologiesContent icon={php7_logo} progressValue={40} />
          </picture>
          <article>
            <p>PHP</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
        <div className="container">
          <article>
            <p>OTHER TECHNOLOGIES</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <picture>
            <TechnologiesContent icon={code_logo} progressValue={20} />
          </picture>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
