import React from "react";
import LottieAnimation from "../components/animations/LottieAnimation.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <LottieAnimation />
      <section className="about-section">
        <div className="about-text">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Montes ultricies cras tellus
            blandit augue mi sit. Et ac tincidunt urna sed elit eleifend.
            Sagittis mauris non ut neque sed. Quam proin tempor in enim viverra.
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
