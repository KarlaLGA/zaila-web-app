import React from "react";

import Hero from "./Hero";
import NavBar from "./NavBar";
import Features from "./Features";
import Team from "./Team";

const LandingPage = () => {
  localStorage.removeItem("userData");

  return (
    <div className="home">
      <NavBar />
      <Hero />
      <Features />
      <Team />
    </div>
  );
};

export default LandingPage;
