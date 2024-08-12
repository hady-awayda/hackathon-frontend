import React from 'react';
import './PricingPage.css';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-content">
        <h2>Pricing Plans</h2>
        <div className="pricing-table">
          <div className="features-column">
            <ul>
              <li>Access to success prediction model</li>
              <li>Competitor analysis tool</li>
              <li>Get a customized report</li>
            </ul>
          </div>
          <div className="pricing-card">    
            <h3>Free</h3>
            <ul>
              <li><span className="check">✔</span></li>
              <li><span className="cross">✖</span></li>
              <li><span className="cross">✖</span></li>
            </ul>
            <button className="continue-btn">Continue with Free Account</button>
          </div>
          <div className="pricing-card premium">
            <h3>Premium</h3>
            <ul>
              <li><span className="check">✔</span></li>
              <li><span className="check">✔</span></li>
              <li><span className="check">✔</span></li>
            </ul>
            <button className="subscribe-btn">Subscribe to Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
