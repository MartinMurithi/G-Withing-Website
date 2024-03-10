import React from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

{
  /* Logo, home, about us, services,  */
}
function NavBar() {
  return (
    <nav>
      <menu>
        <NavLink to='/' className="logoImg">
          <img
            src="/assets/Logo.png"
            alt="Logo"
            width="90px"
            className="logo"
          />
        </NavLink>
        <div className="menuList">
          <NavLink to='/' className="menuItem">Home</NavLink>
          <NavLink to='about-us' className="menuItem">About Us</NavLink>
          <NavLink className="menuItem">Services</NavLink>
          <NavLink className="menuItem">Contacts</NavLink>
        </div>
      </menu>
    </nav>
  );
}

export default NavBar;
