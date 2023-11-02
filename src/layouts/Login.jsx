import { useLocation } from "react-router-dom";
import loginImg from "../assets/images/login.jpg";
import FormLogin from "../components/FormLogin";
import NavBar from "../components/NavBar";

function Login() {
    return (
        <div className="login-section">
            <NavBar isLink={true}></NavBar>
            <div className="flex flex-1 items-center">
                <img
                    className="relative h-full w-full object-cover"
                    src={loginImg}
                    alt="Login - Mastermind"
                    draggable="false"
                    loading="lazy"
                />
            </div>

            <div className="login-form">
                <FormLogin></FormLogin>
            </div>
        </div>
    );
}

export default Login;
