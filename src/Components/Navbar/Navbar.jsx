import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className="navbar">
      {/* navbar-logo */}
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <p className="navbar-logo-name">ABOUT-YOU</p>
      </div>
      {/* navbar-menu */}
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu('shop');
          }}
          className="navbar-menu-item"
        >
          Shop{menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('mens');
          }}
          className="navbar-menu-item"
        >
          Men {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('womens');
          }}
          className="navbar-menu-item"
        >
          Women {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids');
          }}
          className="navbar-menu-item"
        >
          Kids {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      {/* navbar-login-cart */}
      <div className="navbar-login-cart">
        <button className="navbar-login-button">Login</button>
        <img className="navbar-cart-img" src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
