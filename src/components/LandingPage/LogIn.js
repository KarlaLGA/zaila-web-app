import React from 'react';
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <div className="log-in">
            <div className="image">
                image
            </div>
            <div className="log-in-form">
                <p>Logo</p>
                <form action="">
                    <label htmlFor="username">Username
                        <input type="text" name="username" id="username"/>
                    </label>
                    <label htmlFor="password">Password
                        <input type="password" name="password" id="password"/>
                    </label>

                    <button>Log In</button>
                </form>
                <Link to="/contact-us">Contact Us</Link>

            </div>

        </div>
    )
}

export default LogIn
