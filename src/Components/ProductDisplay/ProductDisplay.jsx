import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const [selectedSize, setSelectedSize] = useState('');
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const handelSelectSize = (size) => {
    setSelectedSize(size === selectedSize ? '' : size);
  };

  return (
    <div className="product-display-container">
      {/* product-display-left */}
      <div className="product-display-left">
        {/* <div className="product-display-left-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> */}
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      {/* product-display-right */}
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <div className="product-display-right-price">
          <div className="product-display-right-price-old">
            Old price: ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            new price: ${product.new_price}
          </div>
          <div className="product-display-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            facere totam a nobis dolores tempora numquam autem sed iusto
            mollitia odio non molestias, deleniti laboriosam voluptate est?
            Voluptatum, dolores modi.
          </div>
          <div className="product-display-right-size">
            <h1>Select Size</h1>
            <div className="product-display-right-size-select">
              <div
                onClick={() => handelSelectSize('S')}
                className={selectedSize === 'S' ? 'selected-size' : ''}
              >
                S
              </div>
              <div
                onClick={() => handelSelectSize('M')}
                className={selectedSize === 'M' ? 'selected-size' : ''}
              >
                M
              </div>
              <div
                onClick={() => handelSelectSize('L')}
                className={selectedSize === 'L' ? 'selected-size' : ''}
              >
                L
              </div>
              <div
                onClick={() => handelSelectSize('XL')}
                className={selectedSize === 'XL' ? 'selected-size' : ''}
              >
                XL
              </div>
              <div
                onClick={() => handelSelectSize('XXL')}
                className={selectedSize === 'XXL' ? 'selected-size' : ''}
              >
                XXL
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CARD
          </button>
          <p className="product-display-category-right">
            <span>Category:</span>
            <span>women , T-Shirt, Crop Top</span>
          </p>
          <p className="product-display-category-right">
            <span>Tags:</span>
            <span>Modern , Latest</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
