import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
    return (
        <div className="top-navigation">
        <ul className="navigation">
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faSquare} size="2x"/>
                        Settings
                    </Link>
                </li>
                <li>
                <Link>
                        <FontAwesomeIcon icon={faSquare} size="2x"/>
                        LogOut
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}

export default TopNav