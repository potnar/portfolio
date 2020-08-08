import React from "react";
// import "antd/dist/antd.css";
import "./TechnologiesContent.scss";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const TechnologiesContent = (props) => {
  return (
    <div>
      <CircularProgressbarWithChildren value={30}>
        <img
          style={{ width: "80%", marginTop: -5 }}
          src={`${props.icon}`}
          alt="REACT"
        />
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default TechnologiesContent;
