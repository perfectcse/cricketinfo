import React, { useState } from 'react';
import axios from 'axios';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('⚠️ Please fill out both fields');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('✅ Message sent successfully!');
      setFormData({ name: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('❌ Failed to send message');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Logo + About */}
        <div className="footer-left">
          <h2 className="footer-logo">CrickFlick</h2>
          <p className="footer-desc">
            Explore the world of cricket: latest matches, player stats, and fan blogs.
          </p>
          <div className="social-links">
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-instagram" /></a>
            <a href="#"><i className="fa fa-youtube" /></a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CrickFlick | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
