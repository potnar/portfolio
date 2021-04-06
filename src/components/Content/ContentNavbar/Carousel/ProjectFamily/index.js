import React from "react";
import "./ProjectFamily.scss";
import Project from "./Project";

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
            gitLink={project.gitLink}
          />
        );
      })}
    </div>
  );
};

ProjectFamily.propTypes = {};

export default ProjectFamily;
