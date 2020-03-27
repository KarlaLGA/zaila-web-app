import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import crypto from "crypto";

const LogIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialForm = {
    username: "",
    password: ""
  };

  const initialError = {
    usernameError: "",
    submitError: ""
  };

  const [logInForm, setLogInForm] = useState(initialForm);
  const [errorForm, setErrorForm] = useState(initialError);

  const handleSubmit = e => {
    e.preventDefault();

    let { username, password } = logInForm;

    let errorMessage = {
      usernameError: "",
      submitError: ""
    };

    let submitUsername = username.trim();
    let submitPassword = password.trim();

    let formValidates = true;

    if (submitUsername === "") {
      errorMessage.usernameError = "Please enter your username";
      formValidates = false;
    }

    // CHANGE PASSWORD TO HASH
    let output = crypto
      .createHash("sha256")
      .update(submitPassword)
      .digest("hex");

    submitPassword = output;

    const submitLogIn = {
      email: submitUsername,
      password: submitPassword
    };

    if (formValidates) {
      axios
        .post("https://zaila-back-end.herokuapp.com/auth/login", submitLogIn, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem("userData", res.data.token);
            history.push("/dashboard");
            dispatch({ type: "USER_LOG_IN" });
            //window.location.reload();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    setErrorForm(errorMessage);
  };
  return (
    <div className="login-view">
      <div className="mobile">
        <div className="image">
          <img src="/assets/images/Zaila.svg" alt="Zaila logo" />
          <h1>Hello!</h1>
          <h1>My name is Zaila</h1>
          <p>Login on a desktop to use Zaila for your Museum.</p>
        </div>
        <div className="contact-us">
          <p>Don’t have Zaila? Reach out to us!</p>
          <Link to="/#contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="desktop">
        <div className="image">
          <img src="/assets/images/Zaila.svg" alt="Zaila logo" />
          <h1>Hello!</h1>
          <h1>My name is Zaila</h1>
        </div>
        <div className="log-in-form">
          <p>Let’s make your exhibitions more exciting and fun!</p>
          <form action="" onSubmit={handleSubmit}>
            <p className="error-message">{errorForm.submitError}</p>

            <label htmlFor="username">Username:</label>
            <div className="error-message">{errorForm.usernameError}</div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your email"
              onChange={e => {
                setLogInForm({
                  ...logInForm,
                  username: e.target.value
                });
              }}
            />

            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                onChange={e => {
                  setLogInForm({
                    ...logInForm,
                    password: e.target.value
                  });
                }}
              />
            </label>

            <button>Log In</button>
          </form>
          <div className="contact-us">
            <p>Don’t have Zaila? Reach out to us!</p>
            <Link to="/#contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
