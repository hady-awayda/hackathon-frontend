import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");

  const handlePricing = () => {
    navigate("/pricing");
  };
  
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleHome = () => {
    navigate("/home");
  };
  const handlePaidDashboard = () => {
    navigate("/paiduserdashboard");
  };    

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={handleHome}>
        <img src={logo} alt="Logo" />
        <span className="databar">Data Bar</span>
      </div>
      <nav className="nav-links">
        <a onClick={handlePricing}>Pricing</a>
        <a onClick={handlePaidDashboard}>Paid Dashboard</a>
        <a onClick={handleDashboard}>Dashboard</a>
        <a onClick={handleProfile}>Profile</a>
      </nav>
      <div className="auth-buttons">
        {token ? (
          <a onClick={handleLogout} className="logout">
            Logout
          </a>
        ) : (
          <>
            <a onClick={handleLogin} className="login">
              Login
            </a>
            <a onClick={handleSignup} className="signup">
              Sign Up
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
