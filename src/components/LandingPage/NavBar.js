import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="home-nav-bar">
      <NavLink to="#features">Features</NavLink>
      <NavLink to="#team">Team</NavLink>
      <NavLink to="#contact">Contact</NavLink>
      <NavLink to="#download">Download</NavLink>
      <NavLink to="/login">For Museum</NavLink>
    </div>
  );
};

export default NavBar;
