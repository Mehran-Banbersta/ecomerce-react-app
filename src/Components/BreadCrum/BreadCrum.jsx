import React from 'react';
import './BreadCrum.css';

const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="bread-crum">
      HOME <p>&rarr;</p>SHOP{product.category}
      <p>&rarr;</p>{product.name}
    </div>
  );
};

export default BreadCrum;
