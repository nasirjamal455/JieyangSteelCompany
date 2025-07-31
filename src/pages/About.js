// src/pages/About.js
import React from 'react';
import './About.css';  // Make sure to link the custom CSS

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>About Us</h1>
        <p>We are a leading steel manufacturer with over 20 years of experience in providing high-quality steel products.</p>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p>Our mission is to provide durable, high-quality steel products while upholding our values of integrity, quality, and innovation.</p>
        </div>
      </section>

      {/* Company History Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our History</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>Founded in 2000, we started as a small steel manufacturing unit and have since grown to become one of the most trusted steel providers in the industry.</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p>With over 20 years of experience, we continue to expand our operations globally, delivering high-quality steel products to our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section text-center">
        <h2>Our Core Values</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We believe in conducting our business with honesty and transparency.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We prioritize quality in all our products, ensuring long-lasting results for our customers.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We are constantly improving our processes and products to stay ahead in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section text-center">
        <h2>Meet Our Team</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="team-card">
              <img src="https://via.placeholder.com/200" alt="Team Member 1" className="img-fluid rounded-circle" />
              <h5>John Doe</h5>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-card">
              <img src="https://via.placeholder.com/200" alt="Team Member 2" className="img-fluid rounded-circle" />
              <h5>Jane Smith</h5>
              <p>Chief Operating Officer</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-card">
              <img src="https://via.placeholder.com/200" alt="Team Member 3" className="img-fluid rounded-circle" />
              <h5>Michael Lee</h5>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="cta-section text-center">
        <p>Interested in working with us or learning more? <a href="/contact">Contact us today!</a></p>
      </section>
    </div>
  );
};

export default About;
