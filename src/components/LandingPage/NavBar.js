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
        <NavLink to="#features">Features</NavLink>
        <NavLink to="#team">Team</NavLink>
        <NavLink to="#contact">Contact</NavLink>
        <NavLink to="#download">Download</NavLink>
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
