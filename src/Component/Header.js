import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <button className="logo"></button>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <div className="left-links">
              <li><Link to="/Photographer" onClick={handleClick}>Photography</Link></li>
              <li><Link to="/Developer" onClick={handleClick}>Projects</Link></li>
            </div>
            <div className="right-links">
              <li><Link to="/About" onClick={handleClick}>About</Link></li>
              <li><Link to="/Testimonials" onClick={handleClick}>Testimonials</Link></li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
