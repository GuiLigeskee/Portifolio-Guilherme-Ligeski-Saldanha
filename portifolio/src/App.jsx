import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Acquirements from "./components/Acquirements/Acquirements";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Intro />
        <AboutMe />
        <Acquirements />
      </div>
    </>
  );
}

export default App;
