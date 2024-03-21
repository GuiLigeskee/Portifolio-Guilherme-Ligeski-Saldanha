import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Acquirements from "./components/Acquirements/Acquirements";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Intro />
        <br />
        <AboutMe />
        <br />
        <Acquirements />
        <br />
        <Projects />
        <br />
        <Contact />
      </div>
    </>
  );
}

export default App;
