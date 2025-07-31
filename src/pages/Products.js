// src/pages/Products.js
import React from 'react';
import './Products.css';  // Create a separate CSS file for the Products page styling
import { Link } from 'react-router-dom';
import SteelBars from '../Images/SteelBars.jpg'
import SteelPipes from '../Images/SteelPipes.jpg'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate()
    const handleClick=(product)=>{
        navigate(`/product/${product.id}`, {state:{productId:product.id, productImage:product.image.name, productname:product.name, productdescription:product.description}})
    }
  const products = [
    {
      id: 1,
      name: 'Steel Sheets',
      description: 'High-quality steel sheets for various industries.',
      image:{name:SteelPipes},
    },
    {
      id: 2,
      name: 'Steel Pipes',
      description: 'Durable and reliable steel pipes for construction and more.',
      image: {name:SteelBars},
    },
    {
      id: 3,
      name: 'Steel Bars',
      description: 'Precision-cut steel bars for manufacturing purposes.',
      image: {name:SteelPipes},
    },
    {
      id: 4,
      name: 'Steel Beams',
      description: 'Strong and reliable steel beams for construction projects.',
      image: {name:SteelBars},
    },
    {
      id: 5,
      name: 'Steel Wire',
      description: 'High-strength steel wire for industrial use.',
      image: {name:SteelPipes},
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center">Our Products</h2>
      <div className="row">
        {products.map((product) => (
            <div className="col-md-4" key={product.id}>
             <div className="card">
              <img
                src={product.image.name}
                alt={product.name}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }} // Ensure image fits properly
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button  className="btn btn-primary" onClick={()=>handleClick(product)}>
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
