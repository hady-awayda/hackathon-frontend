import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Data Bar</span>
      </div>
      <nav className="nav-links">
        <a href="#">Pricing</a>
        <a href="#">Dashboard</a>
        <a href="#">Profile</a>
      </nav>
      <div className="auth-buttons">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="signup">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
