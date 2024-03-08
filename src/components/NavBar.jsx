import React from 'react';
import "./NavBar.css";

        {/* Logo, home, about us, services,  */}
function NavBar() {
  return (
        <nav>
            <menu>
              <div className="logoImg"><img src="/assets/Logo.png" alt="Logo" width="90px" className='logo' /></div>
              <div className="menuList">
                              <li className="menuItem">Home</li>
              <li className="menuItem">About Us</li>
              <li className="menuItem">Services</li>
              <li className="menuItem">Contacts</li>
              </div>

            </menu>
        </nav>
  )
}

export default NavBar