import { useNavigate } from "react-router-dom";
import navlogo from "../assets/images/mastermind-nav.png";
import NavBarItems from "./NavBarItems";

function NavBar({ isLink }) {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate("/home");
    };

    return (
        <div className="fixed top-0 z-30 flex w-screen justify-between bg-primary-4/40 lg:px-8">
            <div
                className="bg-white-100 flex hover:cursor-pointer"
                onClick={handleReturnHome}
            >
                <img
                    className="ml-2 h-16 w-16 md:h-24 md:w-24"
                    src={navlogo}
                    alt=""
                />
            </div>
            <NavBarItems isLink={isLink}></NavBarItems>
        </div>
    );
}

export default NavBar;
