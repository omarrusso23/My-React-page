import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="tex">
        <h1 className="name">Omar Russo Castillo</h1>
        <h2 className="job">Freelance Artist</h2>
      </div>
      <div className="butto">
        <button className="btn">
          <a href="https://omarrusso.artstation.com" target="blank" className="li">
            CLICK HERE
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
