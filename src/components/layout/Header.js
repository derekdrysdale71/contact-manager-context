import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: "#563d7c",
  minHeight: "4rem"
}

const Header = ({ branding }) => {
  return (
    <nav
      className="navbar navbar-expand navbar-dark mb-3 py-0"
      style={headerStyle}>
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Header;