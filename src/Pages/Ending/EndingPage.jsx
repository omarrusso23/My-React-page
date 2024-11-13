import React from "react";
import { Typewriter } from "../../Animations/Typewriter";
import CV from "../../Assets/Omar's CV.pdf";
import "./EndingPage.css";

const EndingPage = () => {
  return (
    <div className="ending-page">
      <h1 className="ending-header">
        <Typewriter text={"Thanks for stopping by!"} speed={200} />
        <span className="waving-emoji">👋</span>
      </h1>
      <p className="ending-message">
        Thanks a bunch for swinging by my portfolio! I hope you found it useful
        and maybe even a tad inspiring. Got questions? Want to brainstorm ideas?
        Or just fancy a chat? I’m all ears—don’t be shy, let’s connect!
      </p>
      <div className="ending-links">
        <a href={CV} className="ending-link download-cv" download>
          Download CV
        </a>
        <a href="mailto:omar.russo23@gmail.com" className="ending-link">
          Let’s Connect
        </a>
        <a
          href="https://www.linkedin.com/in/omar-russo-castillo-421680145/"
          className="ending-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/omarrusso23"
          className="ending-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default EndingPage;
