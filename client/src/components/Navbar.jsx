import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Style import
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
    <h3 className="logo">EState</h3>
      <button className="nav_toggle" onClick={handleToggle}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`nav_items ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/properties" onClick={handleClose}>
            Properties
          </Link>
        </li>
        <li>
          <Link to="/add-property" onClick={handleClose}>
            Add Property
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
