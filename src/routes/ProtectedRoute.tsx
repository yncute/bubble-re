import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

//figure out where to put outlet
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <>{children}</> : <Navigate to="/signin" />;
};
