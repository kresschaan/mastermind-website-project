import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Logout() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("userToken");

        navigate("/login");
    };

    return (
        <div className="p-2 px-4 border-l hover:cursor-pointer">
            <FiLogOut className="text-3xl" onClick={handleLogOut}></FiLogOut>
        </div>
    );
}

export default Logout;
