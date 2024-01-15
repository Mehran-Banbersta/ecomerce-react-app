import React, { useContext } from 'react';
import BreadCrum from '../../Components/BreadCrum/BreadCrum.jsx';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay.jsx';
import './Product.css';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="product-container">
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts />
    </div>
  );
};

export default Product;
