// src/pages/Home.js
import React from 'react';
import './Home.css';  // Import the custom CSS for Home page styling
import { Link } from 'react-router-dom';
import SteelSheets from '../Images/SteelSheets.jpg'
import SteelPipes from '../Images/SteelPipes.jpg'
import SteelBars from '../Images/SteelBars.jpg'
import TeamVisit from '../Images/TeamVisit.jpg'
import TeamVisit2 from '../Images/TeamVisit2.jpg'
import TeamVisit3 from '../Images/TeamVisit3.jpg'
import TeamVisit4 from '../Images/TeamVisit4.jpg'
import FactoryMachines from '../Images/FactoryMachines.jpg'


const Home = () => {
  return (
    <div> 
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Welcome to Our Steel Company</h1>
        <p>Your trusted source for high-quality steel products.</p>
        <Link to="/products">
          <button className="btn btn-primary">Explore Our Products</button>
        </Link>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products text-center">
        <h2>Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={SteelSheets} alt="Steel Sheets" />
              <div className="card-body">
                <h5 className="card-title">Steel Sheets</h5>
                <p className="card-text">High-quality steel sheets for various industries.</p>
                <Link to="/products" className="btn btn-secondary">View More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={SteelPipes} alt="Steel Pipes" />
              <div className="card-body">
                <h5 className="card-title">Steel Pipes</h5>
                <p className="card-text">Durable and reliable steel pipes for construction and more.</p>
                <Link to="/products" className="btn btn-secondary">View More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={SteelBars} alt="Steel Bars" />
              <div className="card-body">
                <h5 className="card-title">Steel Bars</h5>
                <p className="card-text">Precision-cut steel bars for manufacturing purposes.</p>
                <Link to="/products" className="btn btn-secondary">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Visit Section */}
      <section className="factory-visit text-center my-5">
        <h2>Factory Visit</h2>
        <p>Come visit our state-of-the-art steel manufacturing facility and see the process behind our high-quality products. We welcome industry professionals and clients to explore our factory and learn more about our production processes.</p>
        
        <div className="factory-images">
          <img src={TeamVisit} alt="Factory Image 1" className="img-fluid" />
          <img src={TeamVisit2} alt="Factory Image 2" className="img-fluid" />
          <img src={TeamVisit3} alt="Factory Image 2" className="img-fluid" />
          <img src={TeamVisit4} alt="Factory Image 2" className="img-fluid" />
          <img src={FactoryMachines} alt="Factory Image 2" className="img-fluid" />
        </div>

        <div className="my-3"> 
          <Link to="/contact">
            <button className="btn btn-success">Schedule a Visit</button>
          </Link>
        </div>
      </section>

      {/* Other sections can go here */}
       <section className="contact-info text-center my-5">
        <h2>Contact Information</h2>
        <div className="row">
          {/* Contact Info Card */}
          <div className="col-md-4">
            <div className="contact-card">
              <h3>Email Us</h3>
              <p>info@steelcompany.com</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <h3>Call Us</h3>
              <p>+123 456 789</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <h3>Visit Us</h3>
              <p>123 Steel St, Industrial City, Country</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
