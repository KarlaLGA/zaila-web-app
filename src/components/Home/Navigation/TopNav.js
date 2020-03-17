import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-navigation">
      <ul className="navigation">
        <NavLink
          to="/dashboard/settings"
          activeClassName="selected-top"
          className="caption"
        >
          <img src="/icons/settings.svg" alt="settings icon" />
          Settings
        </NavLink>
        <li className="caption">
          <img src="/icons/logout.svg" alt="logout icon" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
