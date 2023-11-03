import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAddMessageMutation, useAddUserMutation } from "../store/index";
import { ImSpinner3 } from "react-icons/im";

function FormContact({ priceVal, planVal }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [addMessage, results] = useAddMessageMutation();

    const handleSubmitContact = (data) => {
        console.log(data);
        addMessage(data);
    };

    useEffect(() => {
        if (results.status === "fulfilled") {
            reset();
        }
    }, [results, reset]);

    return (
        <form
            className="no-scrollbar w-9/12 overflow-auto rounded-lg bg-white/90 px-16 py-16 shadow-md md:mt-14 md:w-8/12 lg:rounded-none lg:p-0 lg:shadow-none"
            action=""
            onSubmit={handleSubmit(handleSubmitContact)}
        >
            <h1 className="contact-title font-avernir-heavy">Contact Us</h1>
            <div className="group my-6 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="firstName">
                    NAME
                </label>
                <input
                    id="name"
                    className={`contact-input ${
                        errors?.name ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("name", {
                        required: true,
                        maxLength: 50,
                        pattern: /^[a-zA-Z ]*$/,
                    })}
                ></input>
                {errors.name && (
                    <p className="form-error">Please enter a valid name.</p>
                )}
            </div>

            <div className="group my-6 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="email">
                    EMAIL
                </label>
                <input
                    id="email"
                    className={`contact-input ${
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

            <div className="group my-6 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="email">
                    MESSAGE
                </label>
                <textarea
                    id="message"
                    className={`contact-area resize-none ${
                        errors?.message ? "error" : "valid"
                    }`}
                    type="textarea"
                    autoComplete="on"
                    {...register("message", {
                        required: true,
                    })}
                ></textarea>
                {errors.message && (
                    <p className="form-error">Please enter a message.</p>
                )}
            </div>

            <div className="mt-14 flex flex-col">
                <button
                    type="submit"
                    className="form-button flex items-center justify-center hover:cursor-pointer"
                >
                    {results.isLoading ? (
                        <ImSpinner3 className="animate-spin text-2xl"></ImSpinner3>
                    ) : (
                        "Submit"
                    )}
                </button>

                {/* <div className="flex flex-col justify-center text-center">
                    <div className="flex flex-col sm:flex-row justify-center">
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
                </div> */}
            </div>
        </form>
    );
}
// onClick={(e) => handleAddUser(e)}
// Get Started
export default FormContact;
