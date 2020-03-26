import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="home-footer">
      <div className="home-button">
        <Link smooth to="/#hero">
          <img src="/logo.svg" alt="Zaila" />
        </Link>
      </div>

      <div className="navigation">
        <Link smooth to="/#contact">
          Contact
        </Link>
        <Link smooth to="/#team">
          Team
        </Link>

        <Link smooth to="/#download">
          Download
        </Link>
      </div>
    </div>
  );
};

export default Footer;
