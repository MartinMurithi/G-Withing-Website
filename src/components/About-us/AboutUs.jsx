import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./AboutUs.css";
import Underline from "../underline/Underline";

function AboutUs() {
  return (
    <>
      <div className="aboutUsSectionParent">
        <div className="aboutUsSection">
          <section className="aboutUsText">
            <p className="aboutUsSectionTitle">About Us</p>
            <h4 className="aboutUsSectionIntro">
              Transforming Your Spaces, One Clean at a Time
            </h4>
            <Underline />
            <p className="aboutUsDescription">
              At G-Within Limited, we offer extensive experience in cleaning
              various types of buildings, including schools, offices, colleges,
              commercial and industrial buildings, hotels, shopping malls,
              government offices, hospitals, and banks. Additionally, we provide
              services for solid waste management and gardening.
            </p>

            <div className="why-choose-us">
              <div className="choose-us-left-side">
                <div className="reason-parent">
                  <div className="checkIconBcg">
                    <FaCheck className="checkIcon" />
                  </div>
                  <p className="reason">Neat & Cleaning Services</p>
                </div>
                <div className="reason-parent">
                  <div className="checkIconBcg">
                    <FaCheck className="checkIcon" />
                  </div>
                  <p className="reason">Expert Cleaner</p>
                </div>
              </div>

              <div className="choose-us-right-side">
                <div className="reason-parent">
                  <div className="checkIconBcg">
                    <FaCheck className="checkIcon" />
                  </div>
                  <p className="reason">Office & Property Cleaner</p>
                </div>
                <div className="reason-parent">
                  <div className="checkIconBcg">
                    <FaCheck className="checkIcon" />
                  </div>
                  <p className="reason">24/7 Online Support</p>
                </div>
              </div>
            </div>

            <Link to="/about-us" className="about-us-link">
              Read More
            </Link>
          </section>
          <div className="aboutUsImgParent">
            <img
              src="assets/aboutImg.png"
              alt="About Us"
              className="aboutUsImg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
