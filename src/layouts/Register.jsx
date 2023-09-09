import registerImg from "../assets/images/register.jpg";
import NavBar from "../components/NavBar";

function Register() {
    return (
        <>
            <NavBar isLink={true}></NavBar>
            <div className="flex flex-col lg:flex-row h-screen">
                <div className="flex flex-1 items-center">
                    <div className="mb-52">
                        <h1 className="absolute font-serif font-bold z-10 ml-10 text-5xl md:text-6xl lg:text-4xl">
                            Sign Up
                        </h1>
                        <h2 className="absolute mt-14 font-serif font-bold z-10 ml-10 text-5xl md:text-6xl lg:text-2xl">
                            Unlock your potential
                        </h2>
                    </div>

                    <img
                        className="object-cover relative h-full "
                        src={registerImg}
                        alt=""
                    />
                </div>

                <div className="flex flex-col flex-1 justify-center items-center ">
                    <form className="w-2/4 " action="">
                        <div className="flex flex-col mb-6">
                            <label
                                className="font-serif mb-2 text-primary-5 text-sm"
                                htmlFor=""
                            >
                                USERNAME
                            </label>
                            <input className="border-b-2" type="text"></input>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label
                                className="font-serif mb-2 text-primary-5 text-sm"
                                htmlFor=""
                            >
                                PASSWORD
                            </label>
                            <input className="border-b-2" type="text"></input>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label
                                className="font-serif mb-2 text-primary-5 text-sm"
                                htmlFor=""
                            >
                                FULL NAME
                            </label>
                            <input className="border-b-2" type="text"></input>
                        </div>

                        <div className="flex flex-col mb-32">
                            <label
                                className="font-serif mb-2 text-primary-5 text-sm"
                                htmlFor=""
                            >
                                EMAIL
                            </label>
                            <input className="border-b-2" type="text"></input>
                        </div>

                        <div className="flex flex-col">
                            <button className="bg-secondary-1 text-white rounded-[8px] border-2 h-12 px-16 mb-6">
                                Get Started
                            </button>

                            <div className="flex flex-row justify-center text-center">
                                <p className="font-light pr-1">
                                    Already have an account?
                                </p>
                                <p>Sign in</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
