import React from "react";
import "./Project.scss";
import PropTypes from "prop-types";

const Project = props => {
  return (
    <div className="project">
      <a href={props.link} target="_blank">
        <div className="img-box">
          <img src={props.imgSrc}>{ }</img>
        </div>
        <div className="desc-box">
          <div className="desc">
            <p>{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

Project.propTypes = {};

export default Project;

