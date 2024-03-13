import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text-parent">
        <div className="hero-text">
          <p className="welcome-text">WELCOME TO</p>
          <p className="company-name">G-WITHIN COMPANY LIMITED</p>
          <p className="intro-hero-text">
            We are a professional cleaning, fumigation, landscaping services
            company in Tanzania.
          </p>
          <div className="hero-btns">
            <Link to="about-us" className="hero-about-us">
              About Us
            </Link>

            <Link to="contact-us" className="hero-contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
