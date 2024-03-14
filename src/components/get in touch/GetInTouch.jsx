import React from 'react';
import { MdPhone } from "react-icons/md";

function GetInTouch() {
  return (
    <div className="get-in-touch-section">
      <h4 className="get-in-touch-title">Get in touch</h4>
      <p className="get0-in-touch-description">
        We are determined to carry on our mission for as long as there will be a
        demand for that kind of care!
      </p>
      <h5 className="get-in-touch-text">Call us! we are available 24/7</h5>
      <div className="contact-parent">
        <MdPhone className='mobile-icon' />
        <a href="tel:+"></a>
      </div>
    </div>
  );
}

export default GetInTouch