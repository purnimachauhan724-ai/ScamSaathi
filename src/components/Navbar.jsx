import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import '../styles/variables.css';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__brand">ScamSaathi</div>
    <div className="navbar__search">
      <input type="text" placeholder="Search tools, safety guides, features..." disabled />
    </div>
    <div className="navbar__actions">
      <button className="icon-btn" aria-label="Notifications">
        <Bell size={20} />
        <span className="badge">0</span>
      </button>
    </div>
  </nav>
);

export default Navbar;
