import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const BarNav = () => {
  return (
    <div className="main-navigation">
      <ul className="navigation">
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faSquare} size="2x" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard/exhibitions">
            <FontAwesomeIcon icon={faSquare} size="2x" />
            Exhibitions
          </Link>
        </li>
        <li>
          <Link to="/dashboard/artworks">
            <FontAwesomeIcon icon={faSquare} size="2x" />
            Artworks
          </Link>
        </li>
        <li>
          <Link to="/dashboard/quests">
            <FontAwesomeIcon icon={faSquare} size="2x" />
            Quests
          </Link>
        </li>
        <li>
          <Link to="/dashboard/sensors">
            <FontAwesomeIcon icon={faSquare} size="2x" />
            Sensors
          </Link>
        </li>
        <li>
          <Link to="/dashboard/reports">
            <FontAwesomeIcon icon={faSquare} size="2x" />
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BarNav;
