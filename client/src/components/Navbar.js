// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap 5 styles are included
import logo from '../Images/companylogo.jpg'
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Navbar = () => {
  return (
    <>
     <div className="bg-light border-bottom py-2">
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div></div>

          {/* Contact & Social Icons */}
          <div className="d-flex align-items-center">
            <span className="me-3 fw-semibold">
              WhatsApp/WeChat: <a href="tel:+8613302117758" className="text-dark text-decoration-none">+8613302117758</a>
            </span>
            
            <div className="d-flex gap-2">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-danger fs-4"><FaYoutube /></a>
              <a href="https://www.facebook.com/profile.php?id=61578881693313" target="_blank" rel="noreferrer" className="text-primary fs-4"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-danger fs-4"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary fs-4"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} className='rounded-circle' width="80" height="80" 
                     alt="Logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text text-secondary" to="/">Home</Link>
            </li>       
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="/products">Products</Link>
            </li>
            <li className="nav-item">   
              <Link className="nav-link text-secondary" to="/about">About</Link>
            </li>
            <li className="nav-item">   
              <Link className="nav-link text-secondary" to="/certificates">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
