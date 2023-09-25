import navlogo from "../assets/images/letter-m.png";
import NavBarItems from "./NavBarItems";

function NavBar({ isLink }) {
    return (
        <div className="flex justify-between bg-primary-4/40 fixed z-30 top-0 w-screen">
            <div className="flex bg-white-100">
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
