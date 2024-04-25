import React, { useState, useEffect } from "react";
import "./body.css";
import imagen from "../../assets/Foto CV.jpeg";
import PDFViewer from "../pdf";

const Body = () => {
  return (
    <div className="Body">
      <div className="bodyInfo">
        <div className="introContainer">
          <div className="bodyIntro">
            Hi, I'm Omar Russo Castillo, a passionate front-end developer. With
            a knack for coding, I thrive on bringing ideas to life in the
            digital realm. Let's build something awesome together!
          </div>
          <img className="bodyImg" src={imagen} alt="Omar Russo Castillo"></img>
        </div>
      </div>
      <div className="separator">Languages</div>
      <div className="languages">
        <div className="frontendLanguages">
          <h1>Frontend</h1>
        </div>
        <div className="backendLanguages">
          <h1>Backend</h1>
        </div>
      </div>
      <div className="separator contactSeparator">Experience</div>
      <div className="experience">
        <div></div>
      </div>
      <div className="separator contactSeparator">Contact</div>
      <div className="contact">
        <div>email: omar.russo23@gmail.com phone: +34693048126</div>
        <div>
          <a
            href="https://github.com/omarrusso23?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go to GitHub</button>
          </a>
          <a
            href="https://www.linkedin.com/in/omar-russo-castillo-421680145/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go to Linkedin</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
