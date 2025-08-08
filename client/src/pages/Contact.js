// src/pages/Contact.js
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css"; // Custom CSS for the Contact page styling
import Wechat from "../Images/weChat-QR.jpg"
import Whatsapp from "../Images/WhatsApp-QR.png"
import axios from "axios"
const Contact = () => {
const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("form data", formData)
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('✅ Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.log("the catch statment run here")
      setStatus('❌ Failed to send email. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="container">
          <h2>Contact Information</h2>
          <div className="row">
            <div className="col-md-4">
              <FaEnvelope />
              <h4>Email</h4>
              <p>rongshengjames@gmail.com</p>
            </div>
            <div className="col-md-4">
              <FaPhoneAlt />
              <h4>Phone</h4>
              <p>+8613302117758</p>
            </div>
            <div className="col-md-4">
              <FaMapMarkerAlt />
              <h4>Address</h4>
              <p>
                11-1-5 Dongfang Commercial Street, Jinghai District Tianjin
                China, Tianjin, China
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* QR Code Section */}
      {/* <section className="qr-codes contact-info">
        <div className="container">
          <h2>Contact Us on WeChat or WhatsApp</h2>
          <div className="row">
            <div className="col-md-5">
              <div className="qr-item">
                <h4>WeChat</h4>
                <img
                  src={Wechat} // Update with the actual path to your WeChat QR code
                  alt="WeChat QR Code"
                  className="img-fluid qr-image"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="qr-item">
                <h4>WhatsApp</h4>
                <img
                  src={Whatsapp} // Update with the actual path to your WhatsApp QR code
                  alt="WhatsApp QR Code"
                  className="img-fluid qr-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Contact Form Section */}
      <section className="contact-form">
        <div className="container">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Location Section (Optional Map) */}
      {/* <section className="location-section">
        <div className="container">
          <h2>Find Us</h2> */}
      {/* You can replace this with an actual map or use an embedded Google Map */}
      {/* <div className="map-container">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.146906433011!2d84.19178181470722!3d27.713898717229053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995fa3477fd8e3b%3A0x1d7f529bd91c3400!2sShree%20Steel%20Factory!5e0!3m2!1sen!2sin!4v1637978098132!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
