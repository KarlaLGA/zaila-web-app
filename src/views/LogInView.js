import React from "react";

import LogIn from "../components/LandingPage/LogIn";
import NavBar from "../components/LandingPage/NavBar";

const LogInView = () => {
  return (
    <div className="log-in">
      <NavBar />
      <LogIn />
    </div>
  );
};

export default LogInView;
