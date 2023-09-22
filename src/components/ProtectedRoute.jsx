import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Register from "../layouts/Register";
import Checkout from "../layouts/Checkout";
import { useVerifyQuery } from "../store";
import Success from "../layouts/Success";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ isAuthenticated, type, ...rest }) => {
    if (type === "auth") {
        const { data, error, isLoading } = useVerifyQuery(
            localStorage.getItem("userToken")
        );

        if (!localStorage.getItem("userToken")) {
            return <Navigate to="/login" />;
        }

        if (isLoading) {
            return <LoadingSpinner />;
        }

        if (data && data.status === true) {
            return <Dashboard />;
        } else {
            return <Navigate to="/login" />;
        }
    }

    // if (type === "checkout") {
    //     const isRegistered = useSelector((state) => {
    //         return state.register.isRegistered;
    //     });

    //     if (isRegistered === false) {
    //         return <Navigate to="/register" />;
    //     } else {
    //         return <Navigate to={rest.path} />;
    //     }
    // }

    // if (type === "success") {
    //     const isRegistered = useSelector((state) => {
    //         return state.register.isRegistered;
    //     });

    //     if (isRegistered === false) {
    //         return <Navigate to="/register" />;
    //     } else {
    //         return <Navigate to={rest.path} />;
    //     }
    // }

    if (type === "checkout") {
        console.log(rest.path);
        return <Checkout />;
    }

    if (type === "success") {
        return <Success />;
    }
};

export default ProtectedRoute;
