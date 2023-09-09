import NavBar from "./components/NavBar";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Feature from "./layouts/Feature";
import Discover from "./layouts/Discover";
import PlanPrice from "./layouts/PlanPrice";
import Footer from "./layouts/Footer";
import useScroll from "./hooks/useScroll.jsx";
import { useState, useEffect } from "react";

function App({ focusOn }) {
    useEffect(() => {
        useScroll(focusOn);
    }, []);

    return (
        <>
            <NavBar isLink={false}></NavBar>
            <Home></Home>
            <About></About>
            <Feature></Feature>
            <Discover></Discover>
            <PlanPrice></PlanPrice>
            <Footer></Footer>
        </>
    );
}

export default App;
