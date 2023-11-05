import { useNavigate } from "react-router-dom";
import useScroll from "../hooks/useScroll";

function FooterNav({ isLink }) {
    const navigate = useNavigate();

    const checkNav = (section) => {
        if (isLink || section === "register" || section === "login") {
            navigate(`/${section}`, { replace: true });
        }

        useScroll(section);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col">
                <div className="footer-nav-item ">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => checkNav("home")}
                    >
                        Home
                    </div>
                </div>
                <div className="footer-nav-item">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => checkNav("plans-pricing")}
                    >
                        Plan & Pricing
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:mx-24 xl:mx-36">
                <div className="footer-nav-item">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => checkNav("about")}
                    >
                        About
                    </div>
                </div>
                <div className="footer-nav-item">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => checkNav("register")}
                    >
                        Sign Up
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="footer-nav-item">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => checkNav("login")}
                    >
                        Log In
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterNav;
