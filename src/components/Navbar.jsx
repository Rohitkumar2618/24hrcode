import React from "react";


import {Link} from 'react-router-dom'
import logo from '../assets/New_Project-removebg-preview.png'
import "./Navbarstyles.css";
const Navbar = () => {
  return (
    <>
      <div classNameName="wrapper">
        <header className="primary-header">
          <div className="container">
            <Link to="/" className="home-link">
              <img
                src={logo}
                alt=""
              />
            </Link>

            <div className="nav-wrapper">
              <input
                type="checkbox"
                id="primary-toggle"
                aria-controls="primary-navigation"
                hidden
              />
              <label for="primary-toggle" className="primary-toggle">
                <div className="line" aria-hidden="true"></div>
                <span className="visually-hidden">Menu</span>
              </label>
              <nav className="primary-navigation" id="primary-navigation">
                <ul className="nav-list" aria-label="Primary" role="list">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Kapler22">Kapler-22b</Link>
                  </li>
                  <li>
                    <Link to="/Features">Features</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
