import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Info</h4>
            <span className="address">P.O Box 5122,m</span>
            <br />
            <span className="address">Dar es salaam, Tanzania</span>
            <br />
            <span className="address">Phone:</span>
            <a href="tel:+254722848277" className="contact">
              +254722 848 277
            </a>
            ,
            <a href="tel:+254788888748" className="contact">
              +254788 888 748,
            </a>
            <a href="tel:+254748621855" className="contact">
              +254 748 621855
            </a>
            <br />
            <span className="address">Email:</span>
            <a href="mailto:info@parapetcleaning.com" className="contact">
              info@parapetcleaning.com
            </a>
        </div>
        <div class="quick-navigation">
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
        <div class="quick-navigation">
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
            <li>
              <Link to={"/how-we-do-it"} className="quick-link">
                How We Do It
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
