import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact-us">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Info</h4>
          <span className="address">P.O Box 5122,m</span>
          <br />
          <span className="address">Dar es salaam, Tanzania</span>
          <br />
          <span className="address">Phone:</span>
          <a href="tel:+25767492502" className="contact">
            +255 767 492 502
          </a>
          ,
          <a href="tel:+255744777776" className="contact">
            +255 744 777 776
          </a>
          <br />
          <span className="address">Email:</span>
          <a href="mailto:ceo@gwithin.co.tz" className="contact">
            ceo@gwithin.co.tz
          </a>
        </div>
        <div className="quick-navigation">
          <h4>Our Services</h4>
          <ul>
            <li>Commercial Cleaning</li>
            <li>Car Cleaning</li>
            <li>Landscaping and Gardening</li>
            <li>Domestic Cleaning</li>
            <li>Fumigation and Pest Control</li>
            <li>Sanitary and Hygiene Solutions</li>
          </ul>
        </div>
        <div className="quick-navigation">
          <h4>Quick Navigation</h4>
          <ul>
            <li>
              <Link to={"/about-us"} className="quick-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"#services"} className="quick-link">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
