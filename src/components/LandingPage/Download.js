import React from "react";

const Download = () => {
  return (
    <div id="download" className="home-view">
      <div className="download-message">
        <img src="/assets/images/Zaila.svg" alt="Zaila" />
        <p className="red-text">Invite me to your next exhibition!</p>
      </div>

      <div className="download-reference">
        <h2>Download Now</h2>

        <img
          src="/assets/images/desktop.png"
          alt="desktop download"
          className="desktop-image"
        />

        <div className="download-buttons">
          <img src="/assets/images/apple.svg" alt="download apple store" />
          <img src="/assets/images/google.svg" alt="download play store" />
        </div>
      </div>
    </div>
  );
};

export default Download;
