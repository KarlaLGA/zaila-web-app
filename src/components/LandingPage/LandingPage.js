import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Features from "./Features";
import Team from "./Team";
import Contact from "./Contact";
import Download from "./Download";

const LandingPage = () => {
  localStorage.removeItem("userData");

  return (
    <div className="home">
      <NavBar />
      <Hero />
      <Features />
      <Team />
      <Contact />
      <Download />
    </div>
  );
};

export default LandingPage;
