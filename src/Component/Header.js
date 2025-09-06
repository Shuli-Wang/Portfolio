import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const location = useLocation();
  const headerClass = location.pathname === "/" || location.pathname === "/Testimonials" 
  ? "header-absolute" 
  : "header";

  return (
    <header className={headerClass}>
      <div className="header-container">
        <Link to="/" aria-label="Go to Home">
          <button className="logo" aria-hidden="true"></button>
        </Link>

        <button
          className="menu-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <div className="left-links">
              <li><Link to="/Photographer" onClick={handleClick} aria-label="Go to Photography page">PHOTOGRAPHY</Link></li>
              <li><Link to="/About" onClick={handleClick} aria-label="Go to About page">ABOUT</Link></li>
            </div>
            <div className="right-links">
              <li><Link to="/Developer" onClick={handleClick} aria-label="Go to Projects page">PROJECTS</Link></li>
              <li><Link to="/Testimonials" onClick={handleClick} aria-label="Go to Testimonials page">TESTIMONIALS</Link></li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
