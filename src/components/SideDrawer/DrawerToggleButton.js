import React from "react";
import "./DrawerToggleButton.scss";

const DrawerToggleButton = props => {
  let toggleClasses = "toggle-button";

  if (props.anim) {
    toggleClasses = "toggle-button active";
    console.log(props.anim);
  }
  return (
    <div className={toggleClasses} onClick={props.click}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default DrawerToggleButton;
