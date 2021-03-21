import React from "react";
import "./ProjectFamily.scss";
import Project from "./Project";
import PropTypes from "prop-types";

const ProjectFamily = props => {
  const { projects } = props;
  if (!projects || !projects.length) {
    return null;
  }
  return (
    <div className="project-family">
      {projects.map(project => {
        return (
          <Project
            title={project.title}
            imgSrc={project.imgSrc}
            description={project.desc}
            link={project.link}
          />
        );
      })}
    </div>
  );
};

ProjectFamily.propTypes = {};

export default ProjectFamily;
