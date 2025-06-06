import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage"; // for example
// import ProductPage from "../pages/ProductPage"; // for example

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> }, // /
      { path: "login", element: <LoginPage /> }, // /login
      { path: "register", element: <RegisterPage /> }, // /register
      // { path: "products", element: <ProductPage /> }, // /products
    ],
  },
]);
