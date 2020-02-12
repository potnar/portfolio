import React from "react";
import contentSections from "shared/globals/contentSections";

const ContentLinks = props => {
  return contentSections.map(contentSections => {
    return (
      <li>
        <a href={`#${contentSections}`}>{contentSections}</a>
      </li>
    );
  });
};

export default ContentLinks;
