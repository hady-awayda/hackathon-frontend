import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Use 'faXTwitter' for X icon
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://via.placeholder.com/50x50" alt="Logo" />
          <p>Empowering your decisions with data-driven insights.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Services</h3>
            <a href="#">Analysis</a>
            <a href="#">Consulting</a>
          </div>
          <div>
            <h3>Product</h3>
            <a href="#">Dashboard</a>
            <a href="#">Mobile App</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#b0b0b0"/>
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faXTwitter} size="2x" color="#b0b0b0"/>
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#b0b0b0" />
            </a>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
