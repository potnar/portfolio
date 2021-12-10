import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo/Logo1.svg";
import DrawerToggleButton from "../TopDrawer/DrawerToggleButton";
import NavLinks from "../NavLinks";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="menu-item">
          <img className="nav__logo" src={logo} alt="logo" />
        </div>
        <div className="menu-item"></div>
        <div className="menu-item nav-links">
          <NavLinks />
        </div>
        <div className="menu-item nav-toggle__button">
          <DrawerToggleButton
            click={this.props.drawerClickHandler}
            anim={this.props.anim}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
