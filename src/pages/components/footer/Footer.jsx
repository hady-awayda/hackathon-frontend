import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://via.placeholder.com/50x50" alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Montes ultrices cras tellus
            blandit augue mi sit.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Services</h3>
            <a href="#">Lorem</a>
          </div>
          <div>
            <h3>Product</h3>
            <a href="#">Lorem</a>
          </div>
          <div>
            <h3>Download</h3>
            <a href="#">Lorem</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#">Lorem</a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <div className="social-icons">
            <a href="#">
              <img src="https://via.placeholder.com/24" alt="Social" />
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/24" alt="Social" />
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/24" alt="Social" />
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/24" alt="Social" />
            </a>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
