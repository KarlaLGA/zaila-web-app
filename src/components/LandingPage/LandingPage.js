import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Features from "./Features";
import Team from "./Team";
import Contact from "./Contact";
import Download from "./Download";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default LandingPage;
