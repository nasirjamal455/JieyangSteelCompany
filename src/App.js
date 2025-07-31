// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarouselComponent from './components/Carousel';
import './App.css';


const AppContent = () => {
  const location = useLocation();  // Correct use of useLocation() within Router context

  return (
    <>
      {/* Conditionally render the Carousel based on the current route */}
      {location.pathname === '/' ? <CarouselComponent /> : null}

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
};
const App = () => {
  return (
    <Router>
      <Navbar />
      <AppContent /> {/* Wrap the AppContent with Router */}
    </Router>
  );
};
export default App;
