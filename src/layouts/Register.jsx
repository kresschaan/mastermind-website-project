import registerImg from "../assets/images/register.jpg";
import navlogo from "../assets/images/mastermind-logo.png";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";

function Register() {
    const { state } = useLocation();

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="flex flex-1 items-center">
                    <div className="hidden lg:flex mb-52">
                        <h1 className="absolute font-serif font-bold z-10 ml-10 text-5xl md:text-3xl lg:text-4xl">
                            Sign Up
                        </h1>
                        <h2 className="absolute mt-14 font-serif font-bold z-10 ml-10 text-5xl md:text-2xl lg:text-2xl">
                            Unlock your potential
                        </h2>
                    </div>

                    <img
                        className="object-cover h-full w-full"
                        src={registerImg}
                        alt=""
                    />
                </div>

                <div className="flex flex-col flex-1 justify-center items-center absolute  overflow-auto w-full h-screen lg:relative">
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
