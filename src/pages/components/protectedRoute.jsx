import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const userRole = useSelector((state) => state.user.role); // Assuming you have a user role in your Redux store

  if (userRole !== requiredRole) {
    // Redirect to the home page if the user does not have the required role
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
