import React, { useEffect } from "react";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import CodingSkills from "./components/CodingSkills";
import Portfolio from "./components/Portfolio";
import img from "./imgs/Correlation.JPG";


function App() {
  let imageName = require("./imgs/Correlation.JPG")
  return (
    <div className="App">
      <header>
        <Landing />
      </header>
      <About />
      <Services />
      {/* <CodingSkills /> */}
      <Portfolio />
      <img src={img} alt=""/>
    </div>
  );
}

export default App;
