import Lottie from "lottie-react";
import React from "react";
import graph1 from "../animations/json/graphs-animation/graph 1 drunk.json";
import graph2 from "../animations/json/graphs-animation/drunk-graphg-2.json";
import graph3 from "../animations/json/graphs-animation/SOBER BAR.json";
import graph4 from "../animations/json/graphs-animation/sober bar 2.json";
import "./Graph.css";
const Graph = () => {
  return (
    <div className="graph-container">
      <div className="box">
        <h1 className="header">The Sober Data Lounge</h1>
        <p className="text">
          You just tried other competitor analysis tools and{" "}
          <span className="highlight-blue">your data is now drunk</span>, foggy
          and makes even less sense?
        </p>
        <div className="graphs-row">
          <div>
            <Lottie
              className="inclination1"
              animationData={graph1}
              loop={true}
              autoplay={true}
            />
          </div>
          <div>
            <Lottie
              className="inclination2"
              animationData={graph2}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
        <p className="text">
          Transform Your Data: Let It Hang Out at Data bar{" "}
          <span className="highlight-blue">and Leave Sober</span>, Ready to
          Deliver Clear Insights.
        </p>
        <div className="graphs-row">
          <div className="">
            <Lottie animationData={graph3} loop={true} autoplay={true} />
          </div>
          <div className="">
            <Lottie animationData={graph4} loop={true} autoplay={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
