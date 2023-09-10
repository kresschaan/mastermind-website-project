import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./layouts/Register.jsx";
import Login from "./layouts/Login.jsx";
import Success from "./layouts/Success.jsx";
import Checkout from "./layouts/Checkout.jsx";
import Home from "./layouts/Home";
import Dashboard from "./layouts/Dashboard";
import "./store/auth/authSlice";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <App />,
    },
    {
        path: "/about",
        element: <App focusOn="about" />,
    },
    {
        path: "/plans-pricing",
        element: <App focusOn="plans-pricing" />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/success",
        element: <Success />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
