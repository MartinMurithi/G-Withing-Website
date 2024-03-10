import React from "react";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About-us/AboutUs";
import Services from "../pages/Services";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default Home;
