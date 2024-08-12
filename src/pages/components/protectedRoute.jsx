import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token'); 

  if (!token) {
    console.log('No token found, redirecting to login.');
    return <Navigate to="/home" />;
  }

  try {
    const decodedToken = jwtDecode(token); 
    console.log('Decoded Token:', decodedToken); 
    
    const userRole = decodedToken.role; 
    console.log('User Role:', userRole); 
    
    if (userRole !== requiredRole) {
      console.log(`User does not have the required role: ${requiredRole}, redirecting to home.`);
      return <Navigate to="/" />;
    }
  } catch (error) {
    console.error('Error decoding token:', error);
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
