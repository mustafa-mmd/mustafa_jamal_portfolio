import React, { useState } from "react";
import { Link } from "react-scroll"; // ✅ Use react-scroll instead of NavLink
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">MJ Creations</h1> 

      {/*  Hamburger Menu */}
      <div className="hamburger" onClick={toggleNavbar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/*  Navigation Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-94} onClick={toggleNavbar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-94} onClick={toggleNavbar}>
            About
          </Link>
        </li>
        <li>
          <Link to="skillwraper" smooth={true} duration={500} offset={-94} onClick={toggleNavbar}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="servicecont" smooth={true} duration={500} offset={-94} onClick={toggleNavbar}>
            Services
          </Link>
        </li>
        <li>
          <Link to="procont" smooth={true} duration={500} offset={-138} onClick={toggleNavbar}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-94} onClick={toggleNavbar}>
            Contact
          </Link>
        </li>
      </ul>

      {/*  Dark Overlay for Mobile Menu */}
      {isOpen && <div className="overlay" onClick={toggleNavbar}></div>}
    </nav>
  );
}

export default Navbar;

