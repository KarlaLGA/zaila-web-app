import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
    return (
        <div className="top-navigation">
            <ul className="navigation">
                <li>
                    <FontAwesomeIcon icon={faSquare} size="2x"/>
                    Settings
                </li>
                <li>
                    <FontAwesomeIcon icon={faSquare} size="2x"/>
                    LogOut
                </li>
            </ul>

        </div>
    )
}

export default TopNav