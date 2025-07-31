// src/pages/ProductDetails.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './ProductDetails.css'


const ProductDetails = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const location = useLocation();
  const product = {
    id: location.state.productId,
    name: location.state.productname,  // Sample data, ideally fetched dynamically
    description: location.description,
    image: location.state.productImage,
    details: location.state.productdescription,
  };
  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>{product.details}</p>
      {/* <p>{product.descripion}</p> */}
    </div>
  );
};

export default ProductDetails;
