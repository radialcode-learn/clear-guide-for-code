import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// TODO: We can remove the <div> with <>
// Define, utils folder
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
