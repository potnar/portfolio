import React from "react";
import "./ContentNavbar.scss";
import ContentLinks from "../../ContentLinks";

class ContentNavbar extends React.Component {
  render() {
    return (
      <nav className="content-navbar">
        <div className="content__menu">
          <div className="content__menu-item"></div>
          <div className="content__menu-item">
            <h1>
              <strong onClick={this.props.onOpen}>Projects</strong>
            </h1>
          </div>
          <div className="content__menu-item"></div>
        </div>
      </nav>
    );
  }
}

export default ContentNavbar;
