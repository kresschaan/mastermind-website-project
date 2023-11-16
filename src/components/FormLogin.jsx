import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useAuthenticateMutation } from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner3 } from "react-icons/im";

function FormLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [authenticate, results] = useAuthenticateMutation();
    const handleAuthenticate = (data) => {
        authenticate(data);
    };
    let loginErr = "";

    if (results.status === "rejected") {
        loginErr = (
            <p className="mt-2 text-sm text-red-400">
                Login or password is invalid.
            </p>
        );
    }

    useEffect(() => {
        if (results.status === "fulfilled") {
            reset();
            localStorage.setItem("userToken", results.data.token);
            navigate("/dashboard");
        }
    }, [results, reset]);

    return (
        <form
            className="mt-12 overflow-auto rounded-lg bg-white/90 p-16 shadow-md lg:w-8/12 lg:rounded-none lg:p-0 lg:shadow-none"
            action=""
            onSubmit={handleSubmit(handleAuthenticate)}
        >
            <h1 className="login-title font-avernir-heavy">Welcome Back!</h1>
            <div className="group mb-6 flex flex-col">
                <label className="form-login-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    id="username"
                    className={`form-login-input ${
                        errors?.username || results.status === "rejected"
                            ? "error"
                            : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("username", {
                        required: true,
                    })}
                ></input>
                {errors.username && (
                    <p className="form-login-error">
                        Please enter a valid username.
                    </p>
                )}
                {loginErr}
            </div>

            <div className="group mb-6 flex flex-col">
                <label className="form-login-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    id="password"
                    className={`form-login-input ${
                        errors?.username || results.status === "rejected"
                            ? "error"
                            : "valid"
                    }`}
                    type="password"
                    autoComplete="on"
                    {...register("password", {
                        required: true,
                    })}
                ></input>
                {errors.password && (
                    <p className="form-login-error">
                        Please enter a valid password.
                    </p>
                )}
                {loginErr}
            </div>

            <div className="mb-6 text-sm text-gray-500">
                <p>Demo</p>
                <p>Username: christiancho</p>
                <p>Password: test123!</p>
            </div>

            <div className="flex flex-col">
                <button className="login-button flex items-center justify-center">
                    {results.isLoading ? (
                        <ImSpinner3 className="animate-spin text-2xl"></ImSpinner3>
                    ) : (
                        "Login"
                    )}
                </button>

                <div className="forgot-password">
                    <p className="pr-1 font-light">Forgot your password?</p>
                    <p>Contact Customer Support</p>
                </div>
            </div>
        </form>
    );
}

export default FormLogin;
