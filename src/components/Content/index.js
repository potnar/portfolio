import React from "react";
import "./Content.scss";
import ContentNavbar from "./ContentNavbar";
import "lib/react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from "./CarouselItem";
import { Carousel } from "lib/react-responsive-carousel";

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
        <Carousel autoPlay>
          {/* <Carousel
          showArrows={true}
          onChange={this.onChange}
          onClickItem={this.onClickItem}
          onClickThumb={this.onClickThumb} />*/}
          <CarouselItem isOpen={this.state.openProjects} />
          <div>
            <div>cos</div>
            <div>cos</div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Content;
