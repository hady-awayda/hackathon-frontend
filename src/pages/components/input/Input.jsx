// src/components/Input.js
import React from "react";

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
        className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={ariaLabel}
        required
      />
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <i className={`fa ${icon} text-gray-400`}></i>
        </div>
      )}
    </div>
  );
};

export default Input;
