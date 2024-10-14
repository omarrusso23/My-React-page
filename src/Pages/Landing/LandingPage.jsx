import React from "react";
import "./LandingPage.css"; // Your CSS file for styles
import profileImage from "../../Assets/Foto CV.jpeg"; // Import your image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-container">
        <h1 className="landing-title">Junior Fullstack Developer</h1>
        <h2 className="landing-subtitle">Hi, I'm Omar Russo Castillo</h2>
        <p className="description">
          Passionate about building modern web applications using React, Redux, and .NET.
        </p>
      </div>
      <div className="image-container">
        <img src={profileImage} alt="Omar Russo Castillo" className="profile-image" />
      </div>
    </div>
  );
};

export default LandingPage;
