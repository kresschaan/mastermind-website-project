import loginImg from "../assets/images/mastermind-success.jpg";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setRegister } from "../store/index";

function Success() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isRegistered = () => {
        localStorage.setItem("isRegistered", false);
    };
    const handleConfirm = (event) => {
        navigate("/login");
        isRegistered();
    };

    return (
        <>
            <NavBar isLink={true}></NavBar>
            <div className="flex h-screen flex-col items-center justify-center md:flex-row">
                <div className="absolute z-10 m-20 flex flex-1 flex-col items-center justify-center rounded-xl bg-white/90 text-justify shadow-md lg:relative lg:m-0 lg:rounded-none lg:shadow-none">
                    <div className="mt-20 flex flex-row">
                        <h1 className="font-avernir-heavy text-2xl font-bold tracking-wider md:text-4xl lg:text-4xl">
                            Payment Successful!
                        </h1>
                        <FaCheckCircle className="mx-2 mt-1 text-3xl text-green-700"></FaCheckCircle>
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
                                className="mb-32 h-12 rounded-[8px] border-2 bg-secondary-1 px-16 text-white hover:cursor-pointer"
                                onClick={() => handleConfirm()}
                            >
                                Start learning now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex h-full flex-1 items-center">
                    <img
                        className="relative h-full w-full object-cover"
                        src={loginImg}
                        alt="Success Image - Mastermind"
                        draggable="false"
                        loading="lazy"
                    />
                </div>
            </div>
        </>
    );
}

export default Success;
