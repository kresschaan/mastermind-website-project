import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useScroll from "../hooks/useScroll.jsx";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function NavBarItems({ isLink }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isRegistered = () => {
        localStorage.setItem("isRegistered", false);
    };

    const checkNav = (section) => {
        if (isLink || section === "register" || section === "login") {
            navigate(`/${section}`, { replace: true });
        }

        useScroll(section);

        if (isMenuOpen === true) {
            navToggle();
        }

        isRegistered();
    };

    const navToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return !isMenuOpen ? (
        <div className="nav-menu">
            {/* <div className="md:hidden py-2 px-4">
                <MdMenu className="h-12 w-12 text-white"></MdMenu>
            </div> */}

            <div
                id="menu-btn"
                className={`h-12 w-12 mr-4 mt-2 text-white hover:cursor-pointer md:hidden ${
                    isMenuOpen ? "" : "open"
                }`}
                onClick={() => navToggle()}
            >
                <span className="hamburger-top mb-4"></span>
                <span className="hamburger-middle mb-4"></span>
                <span className="hamburger-bottom mb-4"></span>
            </div>

            <div className="hidden md:flex p-10 justify-evenly text-white text-sm">
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("home")}
                >
                    Home
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("about")}
                >
                    About
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("plans-pricing")}
                >
                    Plans & Pricing
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("register")}
                >
                    Sign Up
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("login")}
                >
                    Log In
                </div>
            </div>
        </div>
    ) : (
        <div className="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-fit text-lg text-white uppercase bg-black">
            <div className="flex flex-row justify-end py-2 px-4 md:hidden">
                {/* <MdMenu className="h-12 w-12 text-white"></MdMenu> */}

                <div
                    id="menu-btn"
                    className={`h-12 w-12 mr-4 mt-2 text-white hover:cursor-pointer md:hidden ${
                        isMenuOpen ? "" : "open"
                    }`}
                    onClick={() => navToggle()}
                >
                    <span className="hamburger-top mb-4"></span>
                    <span className="hamburger-middle mb-4"></span>
                    <span className="hamburger-bottom mb-4"></span>
                </div>
            </div>

            <div className="py-24 pl-12 space-y-3">
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("home")}
                >
                    Home
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("about")}
                >
                    About
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("plans-pricing")}
                >
                    Plans & Pricing
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("register")}
                >
                    Sign Up
                </div>
                <div
                    className="font-serif font-semibold pr-5 cursor-pointer"
                    onClick={() => checkNav("login")}
                >
                    Log In
                </div>
            </div>
        </div>
    );
}

export default NavBarItems;
