import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="home-nav-bar">
      <div className="home-button">
        <NavLink to="/">
          <img src="/logo.svg" alt="Zaila" />
        </NavLink>
      </div>

      <div className="navigation">
        <a href="/#features">Features</a>
        <a href="/#team">Team</a>
        <a href="/#contact">Contact</a>
        <a href="/#download">Download</a>
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
