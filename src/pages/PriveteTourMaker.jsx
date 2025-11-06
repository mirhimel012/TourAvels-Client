import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateTourMaker = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is logged in, render the protected page
  return <>{children}</>;
};

export default PrivateTourMaker;
