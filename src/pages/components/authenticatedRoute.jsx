import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Corrected import

const AuthenticatedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No token found, redirecting to login.");
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", decodedToken);
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthenticatedRoute;
