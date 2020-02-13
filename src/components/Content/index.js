import React from "react";
import "./Content.scss";
import ContentNavbar from "./ContentNavbar";

class Content extends React.Component {
  render() {
    return (
      <div className="content" id="content-section">
        <ContentNavbar />
        <div className="carousel"></div>
      </div>
    );
  }
}

export default Content;
