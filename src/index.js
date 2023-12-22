import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import AddCart from "./components/AddCart";
import { CartProvider } from "./components/CartContext";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
      {
        path: "cart",
        element: <AddCart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
