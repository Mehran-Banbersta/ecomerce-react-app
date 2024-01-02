import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <p className="navbar-logo-name">ABOUT-YOU</p>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">Shop</li>
        <li className="navbar-menu-item">Men</li>
        <li className="navbar-menu-item">Women</li>
        <li className="navbar-menu-item">Kids</li>
      </ul>
      <div className="navbar-login-cart">
        <button className="navbar-login-button">Login</button>
        <img className="navbar-cart-img" src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
