import React from "react";

const SectionHeading = ({ mainHeading, subHeading }) => {
  return (
    <div className="section-heading">
      <h1>{mainHeading}</h1>
      <h6>{subHeading}</h6>
    </div>
  );
};

export default SectionHeading;
