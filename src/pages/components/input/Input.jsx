// src/components/Input.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Input = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  ariaLabel,
  icon,
}) => {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10" // Padding-left for icon space
        aria-label={ariaLabel}
        required
      />
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={icon} className="text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default Input;
