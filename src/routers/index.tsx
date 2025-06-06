import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage"; 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> }, 
      { path: "login", element: <LoginPage /> }, 
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
