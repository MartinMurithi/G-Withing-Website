import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div class="aboutUsSectionParent">
        <div class="aboutUsSection">
          <section class="aboutUsText">
            <p class="aboutUsSectionTitle">About Us</p>
            <h4 class="aboutUsSectionIntro">
              We are a professional cleaning, fumigation and landscaping
              services company in Tanzania
            </h4>
            <p class="aboutUsDescription">
              We have an extensive experience in cleaning all types of buildings
              such as schools, offices, colleges, commercail buildings,
              industrial buildings, hotels, shopping malls, government offices,
              hospitals, banks and providing solid waste management and
              gardening services.
            </p>
            <Link to="/about-us" className="about-us-link">
              Learn More
            </Link>
          </section>
          <div class="aboutUsImgParent">
            <img
              src="assets/about-us-image.webp"
              alt="About Us"
              class="aboutUsImg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
