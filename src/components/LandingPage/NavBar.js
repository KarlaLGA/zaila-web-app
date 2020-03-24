import React from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="home-nav-bar">
      <div className="home-button">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          duration="500"
        >
          <img src="/logo.svg" alt="Zaila" />
        </Link>
      </div>

      <div className="navigation">
        <Link
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          duration="500"
        >
          Features
        </Link>
        <Link
          activeClass="active"
          to="team"
          spy={true}
          smooth={true}
          duration="500"
        >
          Team
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration="500"
        >
          Contact
        </Link>
        <Link
          activeClass="activa"
          to="download"
          spy={true}
          smooth={true}
          duration="500"
        >
          Download
        </Link>
      </div>

      <button>
        {pathname === "/" ? (
          <NavLink to="/login">For Museum</NavLink>
        ) : (
          <NavLink to="/">For User</NavLink>
        )}
      </button>
    </div>
  );
};

export default NavBar;
