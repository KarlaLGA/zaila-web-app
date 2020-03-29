import React from "react";
import Hero from "./Hero";
import NavBar from "./Navigation/NavBar";
import Features from "./Features";
import Team from "./Team";
import Contact from "./Contact";
import Download from "./Download";
import Footer from "./Navigation/Footer";

const LandingPage = () => {
  localStorage.removeItem("userData");

  return (
    <div className="home">
      <NavBar />
      <div className="body">
        <Hero />
        <Features />
        <Team />
        <Contact />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
