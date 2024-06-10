import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../screens/Dashboard";

export const MainRoute: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
];
