import React, { useState } from 'react';
 import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav'>
      <nav className="navbar">
        <h1 className='logo'>
          <span className='m'>M</span> <span className='j'>j</span>.
        </h1>
        
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="nav" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-94} duration={500} onClick={toggleNavbar}>About</Link></li>
          <li><Link to="skillwraper" smooth={true} offset={-94} duration={500} onClick={toggleNavbar}>Skills</Link></li>
          <li><Link to="servicecont" smooth={true} offset={-94} duration={500} onClick={toggleNavbar}>Services</Link></li>
          <li><Link to="procont" smooth={true} offset={-138} duration={500} onClick={toggleNavbar}>Projects</Link></li>
          <li><Link to="contact" smooth={true} offset={-94} duration={500} onClick={toggleNavbar}>Contacts</Link></li>
          
        </ul>
        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? <CloseIcon style={{ fontSize: 50 }} /> : <MenuIcon style={{ fontSize: 50 }} />}
        </div>
      </nav>
    </div>
  );
 }

export default Navbar; 
