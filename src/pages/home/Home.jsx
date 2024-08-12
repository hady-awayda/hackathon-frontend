import React from "react";
import LottieAnimation from "../components/animations/LottieAnimation.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <LottieAnimation />
      <section className="about-section">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At Data Bar, we are dedicated to empowering businesses and
            individuals with insightful analytics that drive informed decisions.
            Our platform offers cutting-edge data visualization and management
            tools designed to make complex information accessible and
            actionable. Whether you're looking to optimize your operations or
            explore new opportunities, Data Bar provides the clarity and support
            you need to thrive in an increasingly data-driven world.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-image">
          <div className="image-placeholder">Picture</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
