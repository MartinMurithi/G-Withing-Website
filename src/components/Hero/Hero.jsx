import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="welcome-text">WELCOME TO</p>
        <p className="company-name">G-WITHING COMPANY LIMITED</p>
        <p className="intro-hero-text">
          We are a professional cleaning, fumigation, landscaping services
          company in Tanzania.
        </p>
        <Link to='about-us' className="hero-about-us">About Us</Link>
      </div>
    </div>
  );
}

export default Hero;
