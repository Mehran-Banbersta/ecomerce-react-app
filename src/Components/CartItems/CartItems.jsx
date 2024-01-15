import React, { useContext } from 'react';

import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart-items-container">
      <div className="cart-items-main">
        <p>Products</p>
        <p className="cart-items-main-title">Title</p>
 
        <p>Price</p>
        <p>Quantity</p>
        <p>Total price</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cart-items" key={e.id}>
              <div className="cart-items-format">
                <img className="cart-item-image" src={e.image} alt="" />
                <p className="cart-item-name">{e.name}</p>
                {/* <p>
                  {typeof cartItems[e.id]?.size === 'object'
                    ? cartItems[e.id]?.size.size
                    : cartItems[e.id]?.size}
                </p> */}
                <p className="cart-item-price">${e.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <button
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>cart totals</h1>
          <div className="cart-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-total-item">
            <h4>Total</h4>
            <h4>${getTotalCartAmount()}</h4>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-items-promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items-promo-box">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
