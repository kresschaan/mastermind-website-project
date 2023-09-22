import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAddUserMutation } from "../store/index";
import { useNavigate } from "react-router-dom";
import { openModal, setRegister, setAmount } from "../store/index";

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [addUser, addUserRes] = useAddUserMutation();

    const isRegistered = () => {
        dispatch(setRegister(true));
    };

    const addAmount = (amount) => {
        console.log(amount);
        dispatch(setAmount(amount));
    };

    const handleAddUser = (data) => {
        addAmount(parseInt(data.price));
        addUser(data);
    };

    const navigateToSignIn = () => {
        navigate("/login");
    };

    const navigateToHomePage = () => {
        navigate("/home");
    };

    useEffect(() => {
        if (addUserRes.status === "fulfilled") {
            reset();
            // dispatch(openModal(true));
            isRegistered();
            navigate("/checkout");
        }
    }, [addUserRes, reset]);

    return (
        <form
            className="px-16 bg-white/90 rounded-lg shadow-md lg:p-0 w-8/12 lg:rounded-none lg:shadow-none"
            action=""
            onSubmit={handleSubmit(handleAddUser)}
        >
            <div className="flex flex-col my-4 pt-6 2xl:my-4">
                <label className="form-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    id="username"
                    className={`register-input ${
                        errors?.username ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("username", {
                        required: true,
                        minLength: 5,
                    })}
                ></input>
                {errors.username && (
                    <p className="form-error">
                        Please enter a valid username. It should consist of
                        letters, numbers, underscores, and be between 3 to 20
                        characters long
                    </p>
                )}
            </div>

            <div className="flex flex-col my-4 2xl:mb-4">
                <label className="form-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    id="password"
                    className={`register-input ${
                        errors?.password ? "error" : "valid"
                    }`}
                    type="password"
                    autoComplete="on"
                    {...register("password", {
                        required: true,
                        minLength: 8,
                    })}
                ></input>
                {errors.password && (
                    <p className="form-error">
                        Please enter a valid password. It must be at least 8
                        characters long and include a mix of letters, numbers,
                        and symbols.
                    </p>
                )}
            </div>

            <div className="flex flex-col my-4 2xl:mb-4">
                <label className="form-label" htmlFor="firstName">
                    FIRST NAME
                </label>
                <input
                    id="firstName"
                    className={`register-input ${
                        errors?.firstName ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[a-zA-Z ]*$/,
                    })}
                ></input>
                {errors.firstName && (
                    <p className="form-error">
                        Please enter a valid first name.
                    </p>
                )}
            </div>

            <div className="flex flex-col my-4 2xl:mb-4">
                <label className="form-label" htmlFor="lastName">
                    LAST NAME
                </label>
                <input
                    id="lastName"
                    className={`register-input ${
                        errors?.lastName ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("lastName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[a-zA-Z ]*$/,
                    })}
                ></input>
                {errors.lastName && (
                    <p className="form-error">
                        Please enter a valid last name.
                    </p>
                )}
            </div>

            <div className="flex flex-col my-4 2xl:mb-4">
                <label className="form-label" htmlFor="email">
                    EMAIL
                </label>
                <input
                    id="email"
                    className={`register-input ${
                        errors?.email ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                ></input>
                {errors.email && (
                    <p className="form-error">Please enter a valid email.</p>
                )}
            </div>

            <div className="flex flex-col my-4 2xl:mb-4">
                <label className="form-label" htmlFor="email">
                    PLAN
                </label>
                <select
                    id="plan"
                    className={`register-input ${
                        errors?.plan ? "error" : "valid"
                    }`}
                    {...register("plan", {
                        required: true,
                    })}
                >
                    <option defaultValue></option>
                    <option value="Yearly">Yearly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                {errors.plan && (
                    <p className="form-error">Please select a plan.</p>
                )}
            </div>

            <div className="flex flex-col mb-10 2xl:mb-20">
                <label className="form-label" htmlFor="email">
                    PRICE
                </label>
                <select
                    id="price"
                    className={`register-input ${
                        errors?.price ? "error" : "valid"
                    }`}
                    {...register("price", {
                        required: true,
                    })}
                >
                    <option defaultValue></option>
                    <option value="20">$20</option>
                    <option value="50">$50</option>
                    <option value="100">$100</option>
                </select>
                {errors.price && (
                    <p className="form-error">Please select a price.</p>
                )}
            </div>

            <div className="flex flex-col">
                <input
                    type="submit"
                    value="Get Started"
                    className="form-button"
                ></input>

                <div className="flex flex-col justify-center text-center">
                    <div className="flex flex-row justify-center">
                        <p className="font-light pr-1">
                            Already have an account?
                        </p>
                        <p
                            className="hover:cursor-pointer"
                            onClick={navigateToSignIn}
                        >
                            Sign in
                        </p>
                    </div>

                    <p
                        className="mt-2 pb-6 hover:cursor-pointer"
                        onClick={navigateToHomePage}
                    >
                        Go Back to Homepage
                    </p>
                </div>
            </div>
        </form>
    );
}
// onClick={(e) => handleAddUser(e)}
// Get Started
export default Form;
