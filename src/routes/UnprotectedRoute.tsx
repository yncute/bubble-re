import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";

interface UnprotectedRouteProps {
  children: React.ReactNode;
}

export const UnprotectedRoute: React.FC<UnprotectedRouteProps> = ({
  children,
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Navigate to="/" /> : <>{children}</>;
};
