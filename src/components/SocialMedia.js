import React from "react";

const SocialMedia = ( {link, icon} ) => {
  return (
    <li>
      <a href={link} className="icon-link">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialMedia;