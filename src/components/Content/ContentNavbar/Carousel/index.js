import React from "react";
import "./Carousel.scss";

const Carousel = props => {
  if (!props.items) {
    return null;
  }
  return (
    <div className="carousel__wrapper">
      <div
        className="carousel"
        style={{
          "--step": props.step,
          "--n": props.items.length
        }}
      >
        {props.items.map(item => (
          <div className="carousel__item">
            <div className="carousel__item__content">
              {item.content || null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  items: [
    { content: <div>tte</div> },
    { content: <div>sss</div> },
    { content: <div>ppp</div> }
  ]
};

export default Carousel;
