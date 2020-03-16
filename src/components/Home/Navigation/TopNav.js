import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  return (
    <div className="top-navigation">
      <ul className="navigation">
        <NavLink
          to="/dashboard/settings"
          activeClassName="selected-top"
          className="caption"
        >
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Settings
        </NavLink>
        <li className="caption">
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
