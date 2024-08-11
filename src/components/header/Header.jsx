import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  return (
    <header className="header">
      <div className="back-link" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        <span>&lt; Back to Dashboard</span>
      </div>
      <div className="logo">
        <img src="/logo.png" alt="Data Bar Logo" />
        <span>Data Bar</span>
      </div>
    </header>
  );
};

export default Header;
