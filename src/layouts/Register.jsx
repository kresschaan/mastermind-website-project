import registerImg from "../assets/images/register.jpg";
import NavBar from "../components/NavBar";
import Form from "../components/Form";

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
                    <Form></Form>
                </div>
            </div>
        </>
    );
}

export default Register;
