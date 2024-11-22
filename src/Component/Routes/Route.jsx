import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import UserDashboard from "../Dashboard/UserDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: "",
    children: [
      {
        path: "/userDashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);
