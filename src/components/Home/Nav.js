import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div className="navigation-bar">

            <div className="logo">
                <Link to="/">Home</Link>
            </div>
            <ul className="main-navigation">
                <li>
                    <Link to="/exhibitions">Exhibitions</Link>
                </li>
                <li>
                    <Link to="/artworks">Artworks</Link>
                </li>
                <li>
                    <Link to="/quests">Quests</Link>
                </li>
                <li>
                    <Link to="/sensors">Sensors</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
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