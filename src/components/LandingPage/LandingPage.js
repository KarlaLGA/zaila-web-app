import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";

const LandingPage = () => {
  useEffect(() => {
    localStorage.removeItem("userData");
  }, []);

  return (
    <div className="home">
      <Hero />

      <Link to="/login">I am a museum. Log in.</Link>
    </div>
  );
};

export default LandingPage;
