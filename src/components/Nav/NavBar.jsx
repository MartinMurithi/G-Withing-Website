import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from 'react-icons/md';
import "./NavBar.css";
import MobileNav from "./MobileNav";

{
  /* Logo, home, about us, services,  */
}
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
          <NavLink to="/about-us" className="menuItem">
            About Us
          </NavLink>
          {/* <NavLink to='/how-we-do-it' className="menuItem">How We Do It</NavLink> */}
          {/* <NavLink className="menuItem">Contacts</NavLink> */}
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
