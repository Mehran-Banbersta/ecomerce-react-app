import React, { useContext } from 'react';
import { ShopContext } from '../../src/Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log('Props Category:', props.category);
  // console.log(all_product);

  const filteredProducts = all_product.filter((item) => {
    console.log('Item Category:', item.category);
    return item.category.toLowerCase() === props.category.toLowerCase();
  });

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shope-category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shope-category-sort">
          Sort by <button>></button>
        </div>
        <div className="shope-category-products">
          {filteredProducts.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
