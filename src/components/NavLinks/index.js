import React from "react";
import sections from "shared/globals/sections";

const NavLinks = props => {
  return sections.map(section => {
    return (
      <li>
        <a href={`#${section}`}>{section}</a>
      </li>
    );
  });
};

export default NavLinks;
