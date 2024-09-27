import { Link } from "react-router-dom"
import React, { useState } from 'react';
import LogoSvg from "../../svg/LogoSvg"
import './../../css/navBar.css';
import '../icons/notif.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/superadmin-dashboard"><LogoSvg /></Link>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-item">
          <img src={require('../icons/notif.png')} alt="Notifications" style={{ width: '24px', height: '24px' }} />
        </div>
        <div className="navbar-item">
          <img src={require('../icons/settings-icon.png')} alt="Settings" style={{ width: '24px', height: '24px' }} />
        </div>
        <div className="navbar-item avatar-dropdown" onClick={toggleDropdown}>
          <img src={require('../icons/avatar.png')} alt="Avatar" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
          <p>John Doe</p>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                <img src={require('../icons/profile.png')} alt="Profile" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Profile
              </Link>
              <hr />
              <div className="dropdown-item" onClick={handleLogout}>
                <img src={require('../icons/logout.png')} alt="Logout" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Logout
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={require('../icons/menu.png')} alt="Menu" style={{ width: '24px', height: '24px' }} />
      </div>
    </nav>
  );
};

export default NavBar;
