import React from "react";

const ContentLinks = props => {
  return props.projects.map((project, index) => {
    return (
      <li>
        <a
          onClick={() => props.onLinkClick(index)}
          data-state={index === props.active ? "active" : ""}
          href={`#${project.title}`}
        >
          {project.title}
        </a>
      </li>
    );
  });
};

export default ContentLinks;
