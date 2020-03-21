import React from "react";

const Features = () => {
  return (
    <div id="features" className="home-view">
      <h2>Features</h2>
      <div className="mobile">
        <div className="feature">
          {/* <FontAwesomeIcon icon={faGithub} /> */}
          <div className="container">
            <img src="/images/Dashboard.svg" alt="dashboard feature" />
          </div>
          <h3>Museum Dashboard</h3>
          <p>
            A fast and convenient way to manage the exhibitions, artifacts,
            sensors and gamification experience in the museum.
          </p>
        </div>

        <div className="feature">
          <div className="container">
            <img src="/images/wifi.svg" alt="wireless feature" />
          </div>
          <h3>Wireless Interaction</h3>
          <p>
            Learn about the artifacts by simply tapping your phone to the sensor
            or by scanning the QR code next to it.
          </p>
        </div>

        <div className="feature">
          <div className="container">
            <img src="/images/translation.svg" alt="translation feature" />
          </div>
          <h3>Multi Language</h3>
          <p>
            Know about an artifact in your own language. Listen to the
            description or read about it in four different languages.
          </p>
        </div>

        <div className="feature">
          <div className="container">
            <img src="/images/Quest.svg" alt="quest feature" />
          </div>

          <h3>Interactive Quests</h3>
          <p>
            Tap on the artifacts or scan the QR codes, to win rewards & increase
            your level to win quests!
          </p>
        </div>
      </div>
      <div className="desktop">
        <div>
          <div className="feature">
            {/* <FontAwesomeIcon icon={faGithub} /> */}
            <div className="container">
              <img src="/images/Dashboard.svg" alt="dashboard feature" />
            </div>
            <h3>Museum Dashboard</h3>
            <p>
              A fast and convenient way to manage the exhibitions, artifacts,
              sensors and gamification experience in the museum.
            </p>
          </div>

          <div className="feature">
            <div className="container">
              <img src="/images/wifi.svg" alt="wireless feature" />
            </div>
            <h3>Wireless Interaction</h3>
            <p>
              Learn about the artifacts by simply tapping your phone to the
              sensor or by scanning the QR code next to it.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/mobile.png" alt="mobile screens" />
        </div>

        <div>
          <div className="feature">
            <div className="container">
              <img src="/images/translation.svg" alt="translation feature" />
            </div>
            <h3>Multi Language</h3>
            <p>
              Know about an artifact in your own language. Listen to the
              description or read about it in four different languages.
            </p>
          </div>

          <div className="feature">
            <div className="container">
              <img src="/images/Quest.svg" alt="quest feature" />
            </div>

            <h3>Interactive Quests</h3>
            <p>
              Tap on the artifacts or scan the QR codes, to win rewards &
              increase your level to win quests!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
