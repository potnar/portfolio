import React from "react";
import sections from "shared/globals/sections.js";
import { Link } from "react-scroll";

const NavLinks = (props) => {
  return (
    <div>
      <ul>
        {sections.map((section) => {
          return (
            <li >
              <Link
                onClick={props.click}
                activeClass="active-links"
                to={section.link}
                spy={true}
                smooth={true}
                offset={-95}
                duration={100}
              >
                {section.section}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
