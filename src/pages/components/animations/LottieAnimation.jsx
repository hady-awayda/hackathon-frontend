import React from "react";
import Lottie from "lottie-react";
import WaveAnimation from "./json/wave.json";
import Bar from "./json/bar_2.json";
import "./LottieAnimation.css";

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <div className="text-overlay">
        <h1>Your Analytics Overview</h1>
        <p>Data at a Glance</p>
      </div>
      <div className="bar-container">
        <Lottie animationData={Bar} className="lottie-bar" />
      </div>
      <div className="wave-container">
        <Lottie animationData={WaveAnimation} className="lottie-wave" />
      </div>
    </div>
  );
};

export default LottieAnimation;
