import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import all_product from '../../src/Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Try to get cartItems from localStorage, or use default if not present
    const storedCart = JSON.parse(localStorage.getItem('cartItems'));
    return storedCart || getDefaultCart();
  });

  useEffect(() => {
    // Save cartItems to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId, size) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
// getTotalCart  price Amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
// getTotalCart items in cart
const getTotalItemsInCart = () => {
  let totalItems = 0
  for(const item in cartItems) {
    if(cartItems[item] > 0){
      totalItems += cartItems[item]
    }
  }
  return totalItems
}

  const contextValue = {
    getTotalItemsInCart,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };



  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
