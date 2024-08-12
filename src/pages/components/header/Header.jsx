import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlePricing = () =>{
    navigate("/pricing");
  }
  
  const handleDashboard = () =>{
    navigate("/dashboard");
  }

  const handlepProfile = () =>{
    navigate("/profile");
  }

  const handleLogin = () =>{
    navigate("/login");
  }

  const handleSignup = () =>{
    navigate("/signup");
  }

  const handlehome = () =>{
    navigate("/home");
  }
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span onClick={handlehome} className="databar">Data Bar</span>
      </div>
      <nav className="nav-links">
        <a onClick={handlePricing}>Pricing</a>
        <a onClick={handleDashboard}>Dashboard</a>
        <a onClick={handlepProfile}>Profile</a>
      </nav>
      <div className="auth-buttons">
        <a onClick={handleLogin} className="login">
          Login
        </a>
        <a onClick={handleSignup} className="signup">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
