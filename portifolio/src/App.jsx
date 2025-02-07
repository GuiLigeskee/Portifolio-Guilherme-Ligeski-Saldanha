import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Acquirements from "./components/Acquirements/Acquirements";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects/Projects";
import AnimatedSection from "./components/AnimatedSection/AnimatedSection";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

function App() {
  return (
    <>
      <NavBar />
      <ScrollIndicator />
      <div className="container">
        <AnimatedSection>
          <Intro />
        </AnimatedSection>
        <br />
        <AnimatedSection>
          <AboutMe />
        </AnimatedSection>
        <br />
        <AnimatedSection>
          <Acquirements />
        </AnimatedSection>
        <br />
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <br />
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </div>
    </>
  );
}

export default App;
