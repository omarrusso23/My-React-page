import React from "react";
import "./EndingPage.css"; // Your CSS file for styles

const EndingPage = () => {
  return (
    <div className="ending-page">
      <h1 className="ending-header">Thank You!</h1>
      <p className="ending-message">
        Thank you for visiting my portfolio. I hope you found it informative
        and inspiring. If you have any questions or would like to get in touch,
        feel free to reach out!
      </p>
      <div className="ending-links">
        <a href="mailto:your-email@example.com" className="ending-link">
          Contact Me
        </a>
        <a href="/projects" className="ending-link">
          View Projects
        </a>
        <a href="/skills" className="ending-link">
          My Skills
        </a>
      </div>
    </div>
  );
};

export default EndingPage;
