import React from "react";
import Lottie from "lottie-react";
import "./logoAnimation.css";
import cup from "../animations/json/cup/cup.json";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const LogoAnimation = () => {
  const navigate = useNavigate();
  const handleBookSession = () => {
    alert("Booking a session!");
  };
  const handlehome = () => {
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="top">
        <div className="dashboard">
          <Link to="/dashboard" className="dashboard-link">
            <span className="back-arrow">&lt;</span>
            <span> Back to Dashboard</span>
          </Link>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span onClick={handlehome} className="databar">
            Data Bar
          </span>
        </div>
      </div>
      <div className="upper">
        <div className="text">
          <h1>
            <span className="highlight-blue">
              Have a data cocktail with our professionals?
            </span>
          </h1>
          <p>
            Get access to our premium feature. Book your personalized session
            with one of our professionals, now! We connect you to a marketplace
            professional that:
          </p>
          <ul>
            <li>Helps you understand your analysis results</li>
            <li>Informs you of potential successful versions of your idea</li>
            <li>
              Connects you with the right platforms and tools to bring your idea
              to life
            </li>
          </ul>
          <Button
            onclick={handleBookSession}
            type="button"
            className="submit-btn"
            ariaLabel="Book a session"
          >
            BOOK A SESSION NOW
          </Button>
        </div>
        <div className="">
          <Lottie
            className="cup"
            animationData={cup}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
      <div className="btm">
        <div className="text-btm">
          <h5>Timings and professionals available.</h5>
        </div>

        <div className="text-btm">
          <h5>Included in your premium subscription plan.</h5>
        </div>
        <h5>Included in your premium subscription plan.</h5>
      </div>
    </div>
  );
};

export default LogoAnimation;
