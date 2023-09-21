import loginImg from "../assets/images/mastermind-success.jpg";
import NavBar from "../components/NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function Success() {
    const navigate = useNavigate();

    const handleConfirm = (event) => {
        navigate("/login");
    };

    return (
        <>
            <NavBar></NavBar>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="flex flex-col flex-1 justify-center items-center text-justify">
                    <div className="flex flex-row mt-20">
                        <h1 className="font-avernir-heavy font-bold z-10 text-5xl tracking-wider md:text-4xl lg:text-4xl ">
                            Payment Successful!
                        </h1>
                        <FaCheckCircle className="text-3xl mx-2 mt-1 text-green-700"></FaCheckCircle>
                    </div>

                    <div className="w-full px-20 pt-14" action="">
                        <div className="mb-8">
                            <p>
                                Thank You for subscribing to the Mastermind the
                                Masterclass!
                            </p>
                        </div>
                        <div className="mb-10">
                            <p>
                                Congratulations on taking a step further towards
                                bringing your goals and achievements closer.
                                Your payment has been processed, and you can now
                                officially access our online resources and
                                assistance. You are also welcome to schedule
                                private coaching sessions or join one of our
                                group classes.
                            </p>
                        </div>
                        <div className="mb-10">
                            <p>
                                Be sure to follow us on our social media pages
                                for updates, tips and additional resources
                                related to the programs.
                            </p>
                        </div>
                        <div className="mb-20">
                            <p>
                                If you have any questions or need assistance,
                                feel free to contact our support team at
                                1-800-7000.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <button
                                className="bg-secondary-1 text-white rounded-[8px] border-2 h-12 px-16 mb-32 hover:cursor-pointer"
                                onClick={() => handleConfirm()}
                            >
                                Start learning now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 items-center">
                    <img
                        className="object-cover relative h-full "
                        src={loginImg}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default Success;
