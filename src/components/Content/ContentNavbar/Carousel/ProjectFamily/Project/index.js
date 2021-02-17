import React from "react";
import "./Project.scss";
import PropTypes from "prop-types";

const Project = props => {
  return (
    <div className="project">
      <div className="img-box">
        <img src={props.imgSrc}>{}</img>
      </div>
      <div className="desc-box">
        <div className="desc">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {};

export default Project;

