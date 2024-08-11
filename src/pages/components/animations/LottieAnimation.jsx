import React from "react";
import Lottie from "lottie-react";
import animationData from "./wave.json";
import "./LottieAnimation.css";

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <Lottie
        animationData={animationData}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default LottieAnimation;
