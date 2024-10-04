import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { UnprotectedRoute } from "./UnprotectedRoute";

const router = createBrowserRouter([
  // Define your routes here
  {
    path: "/",
    index: true,
    element: (
      <ProtectedRoute>
        <Home></Home>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <UnprotectedRoute>
        <Signup />
      </UnprotectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <UnprotectedRoute>
        <Signin />
      </UnprotectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
