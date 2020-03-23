import React from "react";
import "./Content.scss";
import ContentNavbar from "./ContentNavbar";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openProjects: false };
  }

  handleClickOpenProjects = () => {
    this.setState(prevState => {
      return { openProjects: !prevState.openProjects };
    });
  };

  onChange = e => {
    console.log("onChange, ", e);
  };

  onClickItem = e => {
    console.log("onClickItem, ", e);
  };
  onClickThumb = e => {
    console.log("onClickThumb, ", e);
  };
  render() {
    return (
      <div className="content" id="content-section">
        <ContentNavbar
          isOpen={this.state.openProjects}
          onOpen={this.handleClickOpenProjects}
        />
      </div>
    );
  }
}

export default Content;
