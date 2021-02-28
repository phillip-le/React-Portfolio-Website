import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <header>
        <Landing />
      </header>
      <About />
      <Services />
    </div>
  );
}

export default App;
