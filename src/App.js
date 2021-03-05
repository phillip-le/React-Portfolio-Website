import React, {useEffect} from "react";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import CodingSkills from "./components/CodingSkills";
import Portfolio from "./components/Portfolio";


function App() {
    return (
        <div className="App">
            <header>
                <Landing/>
            </header>
            <About/>
            <Services/>
            <CodingSkills/>
            <Portfolio/>
        </div>
    );
}

export default App;
