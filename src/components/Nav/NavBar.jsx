import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./NavBar.css";
import MobileNav from "./MobileNav";

function NavBar() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <nav>
      <menu>
        <NavLink to="/" className="logoImg">
          <img
            src="/assets/Logo.png"
            alt="Logo"
            width="90px"
            className="logo"
          />
        </NavLink>
        <div className="menuList">
          <NavLink to="/" className="menuItem">
            Home
          </NavLink>

          <Link to="/#services" className="menuItem">
            Services
          </Link>
          <NavLink to="/about-us" className="menuItem">
            About Us
          </NavLink>

          <NavLink to="/#contact-us" className="menuItem">
            Contact Us
          </NavLink>
        </div>

        {isMobileMenuVisible ? (
          <div className="xIcon" onClick={() => setIsMobileMenuVisible(false)}>
            <MdOutlineClose />
          </div>
        ) : (
          <FaBars
            className="barsIcon"
            onClick={() => setIsMobileMenuVisible(true)}
          />
        )}
      </menu>
      {isMobileMenuVisible && <MobileNav />}
    </nav>
  );
}

export default NavBar;
