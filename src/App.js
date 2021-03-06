import React, {useEffect} from "react";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import CodingSkills from "./components/CodingSkills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
      <div className="App">
        <header>
          <Landing/>
        </header>
        <About/>
        <Services/>
        <CodingSkills/>
        <Portfolio/>
        <Experience/>
      </div>
  );
}

export default App;
