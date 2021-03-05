import React from "react";

const PortfolioItem = ({ img, imgAlt, imgRight, link, area, title, description }) => {
  if (imgRight === "true") {
    return (
      <div className="portfolio-item">
        <PortfolioImg
            img={img}
        />
        <PortfolioDesc />
      </div>
    );
  } else {
    return (
      <div className="portfolio-item">
        <PortfolioDesc />
        <PortfolioImg
            img={img}
        />
      </div>
    );
  }
};

const PortfolioImg = ({ img, imgAlt, imgRight, link }) => {
  return (
    <div className={`portfolio-img ${imgRight ? "has-margin-right" : ""}`}>
      <a href={link}>
        {/* <img src={img} alt={imgAlt} className="thumbnail"></img> */}
        {/* <img src={require("../imgs/Correlation.JPG")} alt=""/> */}
        <img src={img} alt=""/>
      </a>
    </div>
  );
};

const PortfolioDesc = ({ link, area, title, description }) => {
  return (
    <div className="portfolio-description">
      <h6>{area}</h6>
      <a href={link}>
        <h1>{title}</h1>
      </a>
      <p>{description}</p>
      <a href={link} className="cta">
        View Details
      </a>
    </div>
  );
};

export default PortfolioItem;
