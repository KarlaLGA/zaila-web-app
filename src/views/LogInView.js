import React from "react";

import LogIn from "../components/LandingPage/LogIn";
import NavBar from "../components/LandingPage/Navigation/NavBar";
import Footer from "../components/LandingPage/Navigation/Footer";

const LogInView = () => {
  localStorage.removeItem("userData");

  return (
    <div className="log-in">
      <NavBar />
      <LogIn />
      <Footer />
    </div>
  );
};

export default LogInView;
