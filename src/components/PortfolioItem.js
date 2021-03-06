import React from "react";


const PortfolioItem = ({img, imgAlt, imgRight, link, area, title, description}) => {
    if (imgRight === "true") {
        return (
            <div className="portfolio-item" data-aos="fade-right" data-aos-delay="300">
                <PortfolioImg
                    img={img}
                    imgAlt={imgAlt}
                    link={link}
                />
                <PortfolioDesc
                    area={area}
                    link={link}
                    title={title}
                    description={description}
                />
            </div>
        );
    } else {
        return (
            <div className="portfolio-item" data-aos="fade-left" data-aos-delay="600">
                <PortfolioDesc
                    area={area}
                    link={link}
                    title={title}
                    description={description}
                />
                <PortfolioImg
                    img={img}
                    imgAlt={imgAlt}
                    link={link}
                />
            </div>
        );
    }
};

const PortfolioImg = ({img, imgAlt, imgRight, link}) => {
    return (
        <div className={`portfolio-img ${imgRight ? "has-margin-right" : ""}`}>
            <a href={link}>
                <img src={img} alt={imgAlt}/>
            </a>
        </div>
    );
};

const PortfolioDesc = ({link, area, title, description}) => {
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
