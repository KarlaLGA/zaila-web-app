import React from "react";

import LogIn from "../components/LandingPage/LogIn";
import NavBar from "../components/LandingPage/NavBar";
import Footer from "../components/LandingPage/Footer";

const LogInView = () => {
  return (
    <div className="log-in">
      <NavBar />
      <LogIn />
      <Footer />
    </div>
  );
};

export default LogInView;
