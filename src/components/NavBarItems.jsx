import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useScroll from "../hooks/useScroll.jsx";

function NavBarItems({ isLink }) {
    const navigate = useNavigate();

    const checkNav = (section) => {
        if (isLink || section === "register" || section === "login") {
            navigate(`/${section}`, { replace: true });
        }

        console.log(section);

        useScroll(section);
    };

    return (
        <div className="nav-menu">
            <div className="md:hidden py-2 px-4">
                <MdMenu className="h-12 w-12 text-white"></MdMenu>
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
    );
}

export default NavBarItems;
