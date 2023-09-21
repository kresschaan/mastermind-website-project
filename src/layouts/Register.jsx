import registerImg from "../assets/images/register.jpg";
import navlogo from "../assets/images/mastermind-logo.png";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import Modal from "../components/Modal";

function Register() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="hidden md:flex flex-1 items-center">
                    <div className="mb-52">
                        <h1 className="absolute font-serif font-bold z-10 ml-10 text-5xl md:text-3xl lg:text-4xl">
                            Sign Up
                        </h1>
                        <h2 className="absolute mt-14 font-serif font-bold z-10 ml-10 text-5xl md:text-2xl lg:text-2xl">
                            Unlock your potential
                        </h2>
                    </div>

                    <img
                        className="object-cover relative h-full w-full"
                        src={registerImg}
                        alt=""
                    />
                </div>

                <div className="flex flex-col flex-1 justify-center items-center">
                    <Form></Form>
                </div>
            </div>
            <Modal></Modal>
        </>
    );
}

export default Register;
