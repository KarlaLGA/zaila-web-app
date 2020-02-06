import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/artworks">Artworks</Link>
                </li>
                <li>
                    <Link to="/sensors">Sensors</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
            </ul>

        </div>
    )
}

export default Nav;