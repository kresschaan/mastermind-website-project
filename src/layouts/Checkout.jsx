import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import checkoutImg from "../assets/images/mastermind-checkout.jpg";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Checkout() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleConfirm = () => {
        navigate("/success");
    };

    // const isRegistered = useSelector((state) => {
    //     console.log(state);
    // });

    // useEffect(() => {
    //     isRegistered;
    // }, []);

    return (
        <div className="flex flex-col justify-center lg:flex-row h-screen w-full">
            <div className="flex flex-1 items-center">
                <img
                    className="object-cover relative opacity-70 lg:opacity-100 h-full w-full"
                    src={checkoutImg}
                    alt=""
                />
            </div>

            <div className="flex flex-col flex-1 justify-center items-center p-16 absolute w-full lg:relative lg:p-20">
                <form
                    className="p-20 bg-white rounded-lg shadow-md lg:rounded-none lg:shadow-none"
                    action=""
                    onSubmit={handleSubmit(handleConfirm)}
                >
                    <h1 className="font-avernir-heavy font-bold text-black z-10 mb-10 text-4xl tracking-wider lg:text-black lg:text-4xl ">
                        Checkout
                    </h1>
                    <div className="flex flex-col mb-6">
                        <label
                            className="font-serif mb-2 text-black font-bold text-sm lg:text-primary-5 lg:font-normal"
                            htmlFor="cardNumber"
                        >
                            Card Number
                        </label>
                        <input
                            id="cardNumber"
                            className="bg-inherit border-b p-2 placeholder-gray-300"
                            type="number"
                            placeholder="0000 0000 0000 0000"
                            maxLength="16"
                            {...register("cardNumber", {
                                required: true,
                                maxLength: 16,
                            })}
                        ></input>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label
                            className="font-serif mb-2 text-black font-bold text-primary-5 text-sm lg:text-primary-5 lg:font-normal"
                            htmlFor="fullName"
                        >
                            Cardholder Name
                        </label>
                        <input
                            id="fullName"
                            className="bg-inherit border-b p-2 lg:placeholder-gray-300"
                            type="text"
                            placeholder="Full Name"
                            {...register("fullName", {
                                required: true,
                            })}
                        ></input>
                    </div>

                    <div className="flex flex-col mb-6">
                        <div className="">
                            <label
                                className="font-serif mb-2 text-black font-bold text-primary-5 text-sm lg:text-primary-5 lg:font-normal"
                                htmlFor=""
                            >
                                Expiration Date
                            </label>
                        </div>
                        <div className="flex flex-row">
                            <input
                                id="month"
                                className="bg-inherit border-b p-2 w-6/12 placeholder-gray-300"
                                type="text"
                                placeholder="MM"
                                {...register("month", {
                                    required: true,
                                    maxLength: 2,
                                })}
                            ></input>
                            <input
                                id="year"
                                className="bg-inherit border-b w-6/12 placeholder-gray-300"
                                type="text"
                                placeholder="YYYY"
                                {...register("year", {
                                    required: true,
                                    maxLength: 4,
                                })}
                            ></input>
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label
                            className="font-serif mb-2 text-black font-bold text-primary-5 text-sm lg:text-primary-5 lg:font-normal"
                            htmlFor="cvc"
                        >
                            CVC
                        </label>
                        <input
                            id="cvc"
                            className="bg-inherit border-b p-2 placeholder-gray-300"
                            type="text"
                            placeholder="000"
                            {...register("cvc", {
                                required: true,
                                maxLength: 3,
                            })}
                        ></input>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center">
                        <input
                            id="submitCard"
                            type="submit"
                            className="bg-secondary-1 text-white  rounded-[8px] border-2 h-12 mb-6 mt-10 w-2/4 hover:cursor-pointer"
                            value="Confirm"
                        ></input>

                        <div className="flex flex-row ">
                            <input
                                type="checkbox"
                                className="font-light pr-1"
                            ></input>
                            <p className="font-light pl-2">
                                Remember card information
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
