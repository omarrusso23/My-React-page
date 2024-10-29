import React, { useState } from "react";
import LandingPage from "./Pages/Landing/LandingPage";
import ProjectPage from "./Pages/Projects/ProjectPage";
import SkillPage from "./Pages/Skills/SkillPage";
import EndingPage from "./Pages/Ending/EndingPage";
import "./App.css"; // Main CSS for your app
import ExperiencePage from "./Pages/Exp/ExperiencePage";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="burger" onClick={toggleNav}>
          <div className={`line ${isNavOpen ? "open" : ""}`}></div>
          <div className={`line ${isNavOpen ? "open" : ""}`}></div>
          <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        </div>

        <div className={`navList ${isNavOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => scrollToSection("landing")}>Home</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
            <li onClick={() => scrollToSection("exp")}>Experience</li>
            <li onClick={() => scrollToSection("ending")}>Contact</li>
          </ul>
        </div>
      </div>

      <div id="landing" className="section">
        <LandingPage />
      </div>

      <div id="projects" className="section">
        <ProjectPage />
      </div>

      <div id="skills" className="section">
        <SkillPage />
      </div>

      <div id="exp" className="section">
        <ExperiencePage />
      </div>

      <div id="ending" className="section">
        <EndingPage />
      </div>

      
    </div>
  );
};

export default App;
