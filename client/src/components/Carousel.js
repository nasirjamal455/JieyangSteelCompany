// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselImage1 from '../Images/carouselImage1.jpg'
import carouselImage2 from '../Images/carouselImage2.webp'
import carouselImage3 from '../Images/carouselImage3.webp'

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Our Steel Sheets</h3>
            <p>High-quality steel sheets for all your industrial needs.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Steel Pipes</h3>
            <p>Durable and versatile steel pipes for various applications.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Steel Bars</h3>
            <p>Precision-cut steel bars for construction and manufacturing.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
