import React, { createContext } from 'react';
import all_product from '../../src/Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  console.log(all_product);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
