import React from "react";

const Hero = () => {
  return (
    <div className="hero home-view">
      <div className="welcome-message">
        <img src="/images/Zaila.svg" alt="Zaila logo" />
        <h1>Hello!</h1>
        <h1>My name is Zaila</h1>
      </div>
      <div className="app-description">
        <p>
          Zaila is the personification of our new tour app. She is a historian
          and a facilitator that will guide your visit through a museum to be
          more enjoyable, fun and efficient. Her main focus is making the
          experience of visiting an exhibition more interactive, informative and
          efficient.
        </p>
        <div className="download">
          <img src="/images/apple.svg" alt="download apple store" />
          <img src="/images/google.svg" alt="download play store" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
