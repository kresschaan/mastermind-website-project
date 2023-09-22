import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useAuthenticateMutation } from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FormLogin(params) {
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
            <p className="text-sm mt-2 text-red-400">
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
            className="p-16 bg-white/90 rounded-lg shadow-md lg:p-0 lg:w-8/12 lg:rounded-none lg:shadow-none w"
            action=""
            onSubmit={handleSubmit(handleAuthenticate)}
        >
            <h1 className="login-title font-avernir-heavy">Welcome Back!</h1>
            <div className="flex flex-col mb-6">
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

            <div className="flex flex-col mb-20">
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

            <div className="flex flex-col">
                <button className="login-button">Login</button>

                <div className="forgot-password">
                    <p className="font-light pr-1">Forgot your password?</p>
                    <p>Click Here</p>
                </div>
            </div>
        </form>
    );
}

export default FormLogin;