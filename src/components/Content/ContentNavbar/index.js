import React from "react";
import "./ContentNavbar.scss";
import ContentLinks from "../../ContentLinks";

class ContentNavbar extends React.Component {
  state = { openProjects: false };

  handleClickOpenProjects = () => {
    this.setState(prevState => {
      return { openProjects: !prevState.openProjects };
    });
  };

  render() {
    return (
      <nav className="content-navbar">
        <div className="content__menu">
          <div className="content__menu-item"></div>
          <div className="content__menu-item">
            <h1>
              <strong onClick={this.handleClickOpenProjects}>Projects</strong>
            </h1>
          </div>
          <div className="content__menu-item"></div>
        </div>
        <div
          className={
            this.state.openProjects ? "content-links open" : "content-links"
          }
        >
          <ul>
            <ContentLinks />
          </ul>
        </div>
      </nav>
    );
  }
}

export default ContentNavbar;
