import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
