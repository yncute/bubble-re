import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import NotFoundPage from "../components/NotFoundPage";
import LayoutComponent from "../components/LayoutComponent";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  // Define your routes here
  {
    path: "/",
    index: true,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <LayoutComponent>
          <Dashboard />
        </LayoutComponent>
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
