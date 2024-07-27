import React, { useState, useEffect } from "react";
import "./body.css";
import Reveal from "../Utils/reveal";

const Body = () => {
  return (
    <div className="Body">
      
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
            <Reveal>
            <button>Go to GitHub</button></Reveal>
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
