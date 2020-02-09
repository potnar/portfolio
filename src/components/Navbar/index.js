import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo/Logo2.svg";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import NavLinks from "../NavLinks";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="menu-item">
          <img className="nav__logo" src={logo} alt="logo" />
        </div>
        <div className="menu-item"></div>
        <div className="menu-item nav-links">
          <ul>
            <NavLinks />
          </ul>
        </div>
        <div className="menu-item nav-toggle__button">
          <DrawerToggleButton click={this.props.drawerClickHandler} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
