import React from "react";
import "./Header.scss";
import comp from "../assets/komp.svg";
// import React, { useRef } from "react";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// // General scroll to element function

// const ScrollDemo = () => {

//    const myRef = useRef(null)
//    const executeScroll = () => scrollToRef(myRef)

//    return (
//       <>
//          <div ref={myRef}>I wanna be seen</div>
//          <button onClick={executeScroll}> Click to scroll </button>
//       </>
//    )
// }
const Header = (props) => {
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
        <img className="img-comp" src={comp} alt="computer" />
        <a href="#about-section">
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
