import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <h1>Portfolio</h1>
      <div className={`menu-toggle ${isMenuOpen ? "open" : ""}`}>
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
