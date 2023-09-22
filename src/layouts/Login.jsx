import loginImg from "../assets/images/login.jpg";
import FormLogin from "../components/FormLogin";

function Login() {
    return (
        <div className="login-section">
            <div className="flex flex-1 items-center">
                <img
                    className="object-cover relative h-full w-full"
                    src={loginImg}
                    alt=""
                />
            </div>

            <div className="login-form">
                <FormLogin></FormLogin>
            </div>
        </div>
    );
}

export default Login;
