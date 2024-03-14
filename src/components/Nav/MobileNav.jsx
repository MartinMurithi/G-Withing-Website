import React from "react";
import { NavLink, Link } from "react-router-dom";

function MobileNav() {
  return (
    <nav className="mobileNav">
      <ul className="mobileNavList">
        <li className="mobileNavLinkItem">
          <NavLink to={"/"} className="mobileNavLink">
            Home
          </NavLink>
        </li>

        <li className="mobileNavLinkItem">
          <NavLink to={"/#services"} className="mobileNavLink">
            Services
          </NavLink>
        </li>

        <li className="mobileNavLinkItem">
          <NavLink to={"/about-us"} className="mobileNavLink">
            About Us
          </NavLink>
        </li>

        <li className="mobileNavLinkItem">
          <Link to={"/#contact-us"} className="mobileNavLink">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
