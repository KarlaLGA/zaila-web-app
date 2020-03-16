import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const BarNav = () => {
  return (
    <div className="main-navigation">
      <ul className="navigation">
        <NavLink
          to="/dashboard"
          exact
          activeClassName="selected"
          className="caption"
        >
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Home
        </NavLink>
        <NavLink
          to="/dashboard/exhibitions"
          activeClassName="selected"
          className="caption"
        >
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Exhibitions
        </NavLink>
        <NavLink
          to="/dashboard/artifacts"
          activeClassName="selected"
          className="caption"
        >
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Artifacts
        </NavLink>
        <NavLink
          to="/dashboard/quests"
          activeClassName="selected"
          className="caption"
        >
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Quests
        </NavLink>
        <NavLink
          to="/dashboard/sensors"
          activeClassName="selected"
          className="caption"
        >
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Sensors
        </NavLink>
        <NavLink
          to="/dashboard/reports"
          activeClassName="selected"
          className="caption"
        >
          <FontAwesomeIcon icon={faSquare} size="2x" />
          Reports
        </NavLink>
      </ul>
    </div>
  );
};

export default BarNav;
