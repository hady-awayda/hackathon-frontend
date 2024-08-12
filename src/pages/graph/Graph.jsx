import Lottie from "lottie-react";
import React from "react";
import graph from "../components/animations/json/graphs-animation/drunk-graphg-2.json";
const Graph = () => {
  console.log(graph);

  return (
    <div className="lottie-container">
      <div className="text-overlay">
        <Lottie animationData={graph} loop={true} autoplay={true} speed={1} />
      </div>
    </div>
  );
};

export default Graph;
