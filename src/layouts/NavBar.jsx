import navlogo from "../assets/images/letter-m.png";
import NavBarItems from "../components/NavBarItems";

function NavBar() {
    return (
        <div className="flex justify-between bg-primary-4/40 fixed z-10 top-0 w-screen">
            <div className="flex bg-white-100">
                <img className="h-24 w-24" src={navlogo} alt="" />
            </div>
            <NavBarItems></NavBarItems>
        </div>
    );
}

export default NavBar;
