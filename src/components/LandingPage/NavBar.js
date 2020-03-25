import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const { pathname } = useLocation();

  const navClass = useSelector(state => state.user.navBar);

  return (
    <div className="nav-bar">
      <div className="home-nav-bar mobile">
        <div className="home-button">
          <Link smooth to="/#hero">
            <img src="/logo.svg" alt="Zaila" />
          </Link>
        </div>

        <div className="navigation">
          <Link smooth to="/#features">
            Features
          </Link>
          <Link smooth to="/#team">
            Team
          </Link>
          <Link smooth to="/#contact">
            Contact
          </Link>
          <Link smooth to="/#download">
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
      <div
        className={
          navClass ? "home-nav-bar desktop" : "home-nav-bar desktop simplified"
        }
      >
        <div className="home-button">
          <Link smooth to="/#hero">
            <img src="/logo.svg" alt="Zaila" />
          </Link>
        </div>

        <div className="navigation">
          <Link smooth to="/#features">
            Features
          </Link>
          <Link smooth to="/#team">
            Team
          </Link>
          <Link smooth to="/#contact">
            Contact
          </Link>
          <Link smooth to="/#download">
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
    </div>
  );
};

export default NavBar;
