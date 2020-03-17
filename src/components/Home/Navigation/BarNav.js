import React from "react";
import { NavLink } from "react-router-dom";

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
          <img src="/icons/home.svg" alt="home icon" />
          Home
        </NavLink>
        <NavLink
          to="/dashboard/exhibitions"
          activeClassName="selected"
          className="caption"
        >
          <img src="/icons/exhibition.svg" alt="exhibitions icon" />
          Exhibitions
        </NavLink>
        <NavLink
          to="/dashboard/artifacts"
          activeClassName="selected"
          className="caption"
        >
          <img src="/icons/artifact.svg" alt="artifacts icon" />
          Artifacts
        </NavLink>
        <NavLink
          to="/dashboard/quests"
          activeClassName="selected"
          className="caption"
        >
          <img src="/icons/quest.svg" alt="quests icon" />
          Quests
        </NavLink>
        <NavLink
          to="/dashboard/sensors"
          activeClassName="selected"
          className="caption"
        >
          <img src="/icons/sensor.svg" alt="sensors icon" />
          Sensors
        </NavLink>
        <NavLink
          to="/dashboard/reports"
          activeClassName="selected"
          className="caption"
        >
          <img src="/icons/report.svg" alt="reports icon" />
          Reports
        </NavLink>
      </ul>
    </div>
  );
};

export default BarNav;
