import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LogIn = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const initialForm = {
        username: '',
        password: ''
    }

    const initialError = {
        usernameError: '',
        submitError: ''
    }

    const [logInForm,
        setLogInForm] = useState(initialForm);
    const [errorForm,
        setErrorForm] = useState(initialError);

    const handleSubmit = (e) => {
        e.preventDefault();

        let {username, password} = logInForm;

        let errorMessage = {
            usernameError: '',
            submitError: ''
        }

        let submitUsername = username.trim();
        let submitPassword = password.trim();

        let formValidates = true;

        if (submitUsername === "") {
            errorMessage.usernameError = 'Please enter your username';
            formValidates = false;
        }

        const submitLogIn = {
            username: submitUsername,
            password: submitPassword
        };

        if (formValidates) {
            console.log(submitLogIn);
            history.push("/dashboard");
            dispatch({type: "USER_LOG_IN"});
            localStorage.setItem('userData', 'logged in');

            // TODO Connect to backend with endpoint
        }

        setErrorForm(errorMessage);

    }
    return (
        <div className="log-in">
            <div className="image">
                image
            </div>
            <div className="log-in-form">
                <p>Logo</p>
                <form action="" onSubmit={handleSubmit}>

                    <p className="error-message">{errorForm.submitError}</p>

                    <label htmlFor="username">Username</label>
                    <div className="error-message">{errorForm.usernameError}</div>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={e => {
                        setLogInForm({
                            ...logInForm,
                            username: e.target.value
                        })
                    }}/>

                    <label htmlFor="password">Password
                        <input type="password" name="password" id="password" onChange={e => {
                        setLogInForm({
                            ...logInForm,
                            password: e.target.value
                        })
                    }}/>
                    </label>

                    <button>Log In</button>
                </form>
                <Link to="/contact-us">Contact Us</Link>

            </div>

        </div>
    )
}

export default LogIn
