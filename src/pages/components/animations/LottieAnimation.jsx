"use client";
import Lottie from "lottie-react";
import animationData from "./wave.json";

const LottieAnimation = () => {
  return (
    <div style={{ width: "300px", height: "100px" }}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
