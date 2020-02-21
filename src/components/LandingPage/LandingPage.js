import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Hero from './Hero';

const LandingPage = () => {

    const history = useHistory();

    let manageReload = () => {
        history.push({ pathname: '/empty' });
        history.replace({ pathname: '/route-to-refresh' });
    }

    return (
        <div className="home">
            <Hero/>

            <Link to="/dashboard" onClick={manageReload}>
                Go to Dashboard
            </Link>
        </div>
    )
}

export default LandingPage