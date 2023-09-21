import loginImg from "../assets/images/login.jpg";
import FormLogin from "../components/FormLogin";

function Login() {
    return (
        <div className="login-section">
            <div className="flex flex-1 items-center opacity-60 md:opacity-100">
                <img
                    className="object-cover relative h-full w-full"
                    src={loginImg}
                    alt=""
                />
            </div>

            <div className="login-form">
                <h1 className="login-title font-avernir-heavy">
                    Welcome Back!
                </h1>
                <FormLogin></FormLogin>
            </div>
        </div>
    );
}

export default Login;
