// src/components/Button.js
import React from "react";

const Button = ({ onclick, type, className, ariaLabel, children }) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`py-2 px-4 rounded-lg font-bold ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
