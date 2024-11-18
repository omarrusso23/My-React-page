import React from "react";
import { Typewriter } from "../../Animations/Typewriter"; // Adjust the import path as needed
import "./LandingPage.css"; // Your CSS file for styles
import profileImage from "../../Assets/Foto CV B&G.png"; // Import your image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-container">
        <h1 className="landing-title">
          <Typewriter text="FULLSTACK/FRONTEND DEVELOPER" speed={200} />
        </h1>
        <h2 className="landing-subtitle">
          <span className="text-highlight">Hey there, I'm Omar!</span>
        </h2>
        <p className="description">
          I love learning and pushing boundaries to create the best web
          applications and sites I can. With React, Redux, and a dash of .NET,
          I'm always ready to take on new challenges and build something
          amazing!
        </p>
      </div>
      <div className="image-container">
        <img
          src={profileImage}
          alt="Omar Russo Castillo"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;
