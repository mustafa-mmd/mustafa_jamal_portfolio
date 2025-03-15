import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <nav className="navbar">
        <h1 className="logo">Mustafa Jamal</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" exact activeClassName="active" onClick={toggleNavbar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={toggleNavbar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active" onClick={toggleNavbar}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active" onClick={toggleNavbar}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active" onClick={toggleNavbar}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={toggleNavbar}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? <CloseIcon style={{ fontSize: 40 }} /> : <MenuIcon style={{ fontSize: 40 }} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
