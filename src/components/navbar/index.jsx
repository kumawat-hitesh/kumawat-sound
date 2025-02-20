import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoImage from "../../assets/kumawat-logo.png";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/weddings" onClick={toggleMenu}>
            Weddings
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={toggleMenu}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/videos" onClick={toggleMenu}>
            Videos
          </Link>
        </li>
        <li>
          <Link to="/inventory" onClick={toggleMenu}>
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
