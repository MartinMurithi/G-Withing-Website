import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to={"/about-us"} className="mobileNavLink">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
