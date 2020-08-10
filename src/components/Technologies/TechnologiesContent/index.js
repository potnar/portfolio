import React from "react";
// import "antd/dist/antd.css";
import "./TechnologiesContent.scss";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const TechnologiesContent = (props) => {
  return (
    <div>
      <CircularProgressbarWithChildren value={props.progressValue}>
        <img
          style={{ width: "60%", marginTop: -10 }}
          src={`${props.icon}`}
          alt="REACT"
        />
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default TechnologiesContent;
