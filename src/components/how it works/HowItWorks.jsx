import React from "react";
import {
  FaRegCalendar,
  FaRegHandshake,
  FaRegLightbulb,
  FaRegTrashCan,
} from "react-icons/fa6";
import Underline from "../underline/Underline";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="how-it-works-parent">
      <div className="how-it-works-section">
        <h3 className="how-it-works-title">How it Works</h3>
        {/* <Underline /> */}
        <div className="how-it-works-list">
          <div className="how-it-works">
            <div className="how-it-works-parent-icon">
              <FaRegCalendar className="how-it-works-icon" />
            </div>
            <p className="how-it-works-name">Schedule your experience</p>
            <p className="how-it-works-description">
              Book your appointment today to enjoy a seamless cleaning
              experience tailored to your needs and schedule
            </p>
          </div>

          <div className="how-it-works">
            <div className="how-it-works-parent-icon">
              <FaRegHandshake className="how-it-works-icon" />
            </div>

            <p className="how-it-works-name">Meet Your Cleaning Expert</p>
            <p className="how-it-works-description">
              Connect with our seasoned cleaning professionals who bring
              expertise and reliability to every task.
            </p>
          </div>

          <div className="how-it-works">
            <div className="how-it-works-parent-icon">
              <FaRegLightbulb className="how-it-works-icon" />
            </div>
            <p className="how-it-works-name">Get Professional Advices</p>
            <p className="how-it-works-description">
              Unlock valuable insights and recommendations from our
              knowledgeable team to optimize your cleaning routine
            </p>
          </div>

          <div className="how-it-works">
            <div className="how-it-works-parent-icon">
              <FaRegTrashCan className="how-it-works-icon" />
            </div>
            <p className="how-it-works-name">Get The Best Cleaning Service</p>
            <p className="how-it-works-description">
              Experience excellence with our comprehensive cleaning solutions
              that guarantee a spotless and refreshing space
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
