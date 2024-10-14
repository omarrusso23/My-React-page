import React from "react";
import LandingPage from "./Pages/Landing/LandingPage";
import ProjectPage from "./Pages/Projects/ProjectPage";
import SkillPage from "./Pages/Skills/SkillPage";
import EndingPage from "./Pages/Ending/EndingPage";
import "./App.css"; // Main CSS for your app

const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <ul>
          <li onClick={() => scrollToSection("landing")}>Landing</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("ending")}>Ending</li>
        </ul>
      </div>

      {/* Sections */}
      <div id="landing" className="section">
        <LandingPage />
      </div>
      <div id="projects" className="section">
        <ProjectPage />
      </div>
      <div id="skills" className="section">
        <SkillPage />
      </div>
      <div id="ending" className="section">
        <EndingPage />
      </div>
    </div>
  );
};

export default App;
