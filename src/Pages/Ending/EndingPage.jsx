import React from "react";
import { Typewriter } from "../../Animations/Typewriter";
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
        <a href="mailto:omar.russo23@gmail.com" className="ending-link">
          Let’s Connect
        </a>
      </div>
    </div>
  );
};

export default EndingPage;
