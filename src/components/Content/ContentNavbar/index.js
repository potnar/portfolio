import React from "react";
import "./ContentNavbar.scss";
import ContentLinks from "../../ContentLinks";
import Carousel from "./Carousel";

const ContentNavbar = () => {
  const [active, setActive] = React.useState(0);

  return (
    <nav className="content-navbar">
      <div className="content-navbar__item">
        <h1>
          <strong>Projects</strong>
        </h1>
      </div>

      <div className="content-navbar__item">
        <div className="content-links">
          <ContentLinks active={active} onLinkClick={item => setActive(item)} />
        </div>
      </div>
      <Carousel step={active} />
    </nav>
  );
};

export default ContentNavbar;
