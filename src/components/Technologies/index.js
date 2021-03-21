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
    <div className="container-technologies" id="technologies">
      <nav>
        <h1>Technologies</h1>
      </nav>
      <section>
        <div className="container">
          <div className="col">
            <picture>
              <TechnologiesContent icon={js_logo} progressValue={60} />
            </picture>
            <article>
              <h3>JavaScript</h3>
              <p>
                Knowledge of ES6, knowledge of JavaScript mechanisms such as: hoisting, closures, scope, DOM tree manipulation, knowledge of AJAX, knowledge of array methods
              </p>
            </article>
          </div>
          <div className="col">
            <article>
              <h3>REACT</h3>
              <p>
                Knowlledge of Hooks, React Components, Life Cycles, Redux, Connect with Node js.
              </p>
            </article>
            <picture>
              <TechnologiesContent icon={react_logo} progressValue={30} />
            </picture>
          </div>
          <div className="col">
            <picture>
              <TechnologiesContent icon={html5_logo} progressValue={70} />
            </picture>
            <article>
              <h3>HTML5</h3>
              <p>
                Knowledge about HTML document, Bootstrap, Bulma, HTML5 Tags.
              </p>
            </article>
          </div>
        </div>
        <div className="container">
          <div className="col">
            <article>
              <h3>CSS3</h3>
              <p>
                Knowledge about
              </p>
            </article>
            <picture>
              <TechnologiesContent icon={css3_logo} progressValue={70} />
            </picture>
          </div>
          <div className="col">
            <picture>
              <TechnologiesContent icon={php7_logo} progressValue={40} />
            </picture>
            <article>
              <h3>PHP</h3>
              <p>
                Usage in creating mail server, modifying Excell files, and usage in Wordpress
              </p>
            </article>
          </div>
          <div className="col">
            <article>
              <h3>OTHER TECHNOLOGIES</h3>
              <p>
                I used Unity to creating 2D games and 3D games. Knowledge of fixed timing
              </p>
            </article>
            <picture>
              <TechnologiesContent icon={code_logo} progressValue={20} />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
