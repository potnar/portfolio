import React from "react";
import "./TopDrawer.scss";
import NavLinks from "../NavLinks";

const TopDrawer = props => {
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

export default TopDrawer;
