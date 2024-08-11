import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="back-link">
        <a href="/dashboard">&lt; Back to Dashboard</a>
      </div>
      <div className="logo">
        <img src="/logo.png" alt="Data Bar Logo" />
        <span>Data Bar</span>
      </div>
    </header>
  );
};

export default Header;
