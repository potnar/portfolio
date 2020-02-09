import React from "react";
import "./SideDrawer.scss";
import NavLinks from "../NavLinks";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="spacer"></div>
      <ul>
        <NavLinks />
      </ul>
    </nav>
  );
};

export default SideDrawer;
