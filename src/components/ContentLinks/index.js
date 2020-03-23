import React from "react";
import contentSections from "shared/globals/contentSections";

const ContentLinks = props => {
  return contentSections.map((contentSections, index) => {
    return (
      <li>
        <a
          onClick={() => props.onLinkClick(index)}
          data-state={index === props.active ? "active" : ""}
          href={`#${contentSections}`}
        >
          {contentSections}
        </a>
      </li>
    );
  });
};

export default ContentLinks;
