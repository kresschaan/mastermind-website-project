import registerImg from "../assets/images/register.jpg";
import Form from "../components/Form";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";

function Register() {
    const { state } = useLocation();

    return (
        <>
            <div className="flex h-screen flex-col md:flex-row">
                <div className="flex flex-1 items-center">
                    <div className="mb-52 hidden lg:flex">
                        <h1 className="absolute z-10 ml-10 font-serif text-5xl font-bold md:text-3xl lg:text-4xl">
                            Sign Up
                        </h1>
                        <h2 className="absolute z-10 ml-10 mt-14 font-serif text-5xl font-bold md:text-2xl lg:text-2xl">
                            Unlock your potential
                        </h2>
                    </div>

                    <img
                        className="h-full w-full object-cover"
                        src={registerImg}
                        alt="Sign Up - Mastermind"
                        draggable="false"
                        loading="lazy"
                    />
                </div>

                <div className="absolute flex h-screen w-full flex-1 flex-col items-center justify-center overflow-auto lg:relative">
                    {state ? (
                        <Form
                            priceVal={state.price}
                            planVal={state.plan}
                        ></Form>
                    ) : (
                        <Form></Form>
                    )}
                </div>
            </div>
            <Modal></Modal>
        </>
    );
}

export default Register;
