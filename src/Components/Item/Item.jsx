import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="item-container">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-container-price">
        <div className="item-container-price-new">${props.new_price}</div>
        <div className="item-container-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
