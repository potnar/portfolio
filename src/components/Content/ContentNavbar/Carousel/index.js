import React from "react";
import "./Carousel.scss";

const Carousel = props => {
  return (
    <div className="carousel" style={{ "--step": props.step }}>
      <div className="carousel__item"></div>
      <div className="carousel__item"></div>
      <div className="carousel__item"></div>
      <div className="carousel__item"></div>
      <div className="carousel__item"></div>
    </div>
  );
};

export default Carousel;
