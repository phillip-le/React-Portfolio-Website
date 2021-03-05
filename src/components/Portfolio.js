import React from "react";
import SectionHeading from "./SectionHeading";
import PortfolioItem from "./PortfolioItem";
import chessBoard from "../imgs/Chess-Snapshot.JPG";
import graph from "../imgs/Correlation.JPG";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <SectionHeading
          mainHeading="Portfolio"
          subHeading="What I've done recently"
        />
        <PortfolioItem
          img={chessBoard}
          imgAlt="Image of chess board"
          imgRight="true"
          link="https://github.com/phillip-le/Java-Chess"
          area="Application Programming"
          title="Java Chess"
          description="Yes, another implementation of chess. Imagine playing a game that the devs haven't updated in millenia."
        />
        <PortfolioItem
          img={graph}
          imgAlt="Image of graph showing correlation between predicted housing prices and actual housing prices."
          imgRight="false"
          link="https://github.com/phillip-le/Data-Analysis-of-Melbourne-Housing-Prices/blob/main/nbs/Analysis_of_Melbourne_Housing_Prices.ipynb"
          area="Data Science"
          title="Predicting Melbourne Housing Prices"
          description="Ever wanted to know how much your house is really worth? 
          Or maybe you just want to see what makes houses so expensive."
        />
      </div>
    </section>
  );
};

export default Portfolio;
