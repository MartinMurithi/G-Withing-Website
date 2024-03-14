import React from "react";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About-us/AboutUs";
import Services from "../pages/Services";
import OurClients from "../components/our clients/OurClients";
import HowItWorks from "../components/how it works/HowItWorks";
import Footer from "../components/footer/Footer"

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <OurClients />
      <Footer />
    </div>
  );
}

export default Home;
