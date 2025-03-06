import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logoImage from "../../assets/kumawat-logo.png";

export default function Navbar({ scrollToHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navLinks = document.querySelector(".nav-links");
      const hamburger = document.querySelector(".hamburger");

      if (
        isMenuOpen &&
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </NavLink>
      </div>
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Overlay for closing the menu */}
      <div className={`overlay ${isMenuOpen ? "active" : ""}`}></div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={(e) => {
              toggleMenu();
              if (location.pathname === "/") {
                // If already on the home page, scroll to the top
                e.preventDefault();
                scrollToHome(e);
              }
              // If not on the home page, NavLink will handle navigation
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weddings"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Weddings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Events
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@kumawatsound/videos"
            target="_blank"
          >
            Videos
          </a>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
