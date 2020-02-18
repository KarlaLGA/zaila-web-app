import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div className="navigation-bar">

            <div className="logo">
                <Link to="/dashboard">Home</Link>
            </div>
            <ul className="main-navigation">
                <li>
                    <Link to="/dashboard/exhibitions">Exhibitions</Link>
                </li>
                <li>
                    <Link to="/dashboard/artworks">Artworks</Link>
                </li>
                <li>
                    <Link to="/dashboard/quests">Quests</Link>
                </li>
                <li>
                    <Link to="/dashboard/sensors">Sensors</Link>
                </li>
                <li>
                    <Link to="/dashboard/reports">Reports</Link>
                </li>
            </ul>

            <ul className="secondary-navigation">
                <li>Settings</li>
                <li>Log out</li>
            </ul>

        </div>
    )
}

export default Nav;