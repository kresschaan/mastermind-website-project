import { useNavigate } from "react-router-dom";
import navlogo from "../assets/images/letter-m.png";
import NavBarItems from "./NavBarItems";

function NavBar({ isLink }) {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate("/home");
    };

    return (
        <div className="flex justify-between bg-primary-4/40 fixed z-30 top-0 w-screen">
            <div
                className="flex bg-white-100 hover:cursor-pointer"
                onClick={handleReturnHome}
            >
                <img
                    className="h-16 w-16 ml-2 md:h-24 md:w-24"
                    src={navlogo}
                    alt=""
                />
            </div>
            <NavBarItems isLink={isLink}></NavBarItems>
        </div>
    );
}

export default NavBar;
