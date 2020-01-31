import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo/Logo2.svg";

class Navbar extends React.Component {
  render() {
    const sections = ["Home", "About me", "Projects", "Contact me"];
    const navLinks = sections.map(section => {
      return <a href={"#" + section}>{section}</a>;
    });
    return (
      <nav>
        <div className="menu-item"></div>
        <div className="menu-item">
          <img className="nav__logo" src={logo} alt="logo" />
        </div>
        <div className="menu-item">{navLinks}</div>
      </nav>
    );
  }
}

export default Navbar;
