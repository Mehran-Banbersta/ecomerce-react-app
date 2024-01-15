import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalItemsInCart } =useContext(ShopContext)

  return (
    <div className="navbar">
      {/* navbar-logo */}
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <Link className="link-style" to="/">
          {' '}
          <p className="navbar-logo-name">ABOUT-YOU</p>
        </Link>
      </div>
      {/* navbar-menu */}
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu('shop');
          }}
          className="navbar-menu-item"
        >
          <Link className="link-style" to="/">
            {' '}
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('mens');
          }}
          className="navbar-menu-item"
        >
          <Link className="link-style" to="/mens">
            {' '}
            Men
          </Link>{' '}
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('womens');
          }}
          className="navbar-menu-item"
        >
          <Link className="link-style" to="/womens">
            {' '}
            women
          </Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids');
          }}
          className="navbar-menu-item"
        >
          <Link className="link-style" to="/kids">
            {' '}
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      {/* navbar-login-cart */}
      <div className="navbar-login-cart">
        <Link className="link-style" to="/login">
          <button className="navbar-login-button">Login</button>
        </Link>

        <Link className="link-style" to="/cart">
          <img className="navbar-cart-img" src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalItemsInCart()}</div>
      </div>
    </div>
  );
};

export default Navbar;
