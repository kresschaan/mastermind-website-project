import loginImg from "../assets/images/login.jpg";
import NavBar from "../components/NavBar";

function Login() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex flex-1 items-center">
                <img
                    className="object-cover relative h-full "
                    src={loginImg}
                    alt=""
                />
            </div>

            <div className="flex flex-col flex-1 justify-center items-center ">
                <h1 className=" font-avernir-heavy font-bold z-10 mb-36 mt-20 text-5xl tracking-wider md:text-4xl lg:text-4xl ">
                    Welcome Back!
                </h1>
                <form className="w-2/4" action="">
                    <div className="flex flex-col mb-6">
                        <label
                            className="font-serif mb-2 text-primary-5 text-sm"
                            htmlFor=""
                        >
                            USERNAME
                        </label>
                        <input className="border-b-2" type="text"></input>
                    </div>

                    <div className="flex flex-col mb-32">
                        <label
                            className="font-serif mb-2 text-primary-5 text-sm"
                            htmlFor=""
                        >
                            PASSWORD
                        </label>
                        <input className="border-b-2" type="text"></input>
                    </div>

                    <div className="flex flex-col">
                        <button className="bg-secondary-1 text-white rounded-[8px] border-2 h-12 px-16 mb-32">
                            Login
                        </button>

                        <div className="flex flex-row justify-center text-center mb-10">
                            <p className="font-light pr-1">
                                Forgot your password?
                            </p>
                            <p>Click Here</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
