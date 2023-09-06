import { MdMenu } from "react-icons/md";

function NavBar() {
    return (
        <>
            <div className="md:hidden py-2 px-4">
                <MdMenu className="h-12 w-12 text-white"></MdMenu>
            </div>

            <div className="hidden md:flex p-10 justify-evenly text-white text-sm">
                <div className="font-serif font-semibold pr-5">Home</div>
                <div className="font-serif font-semibold pr-5">About</div>
                <div className="font-serif font-semibold pr-5">
                    Plans & Pricing
                </div>
                <div className="font-serif font-semibold pr-5">Sign Up</div>
                <div className="font-serif font-semibold pr-5">Log In</div>
            </div>
        </>
    );
}

export default NavBar;
