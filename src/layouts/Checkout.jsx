import checkoutImg from "../assets/images/mastermind-checkout.jpg";
import NavBar from "../components/NavBar";

function Checkout() {
    return (
        <>
            <NavBar></NavBar>
            <div className="flex flex-col lg:flex-row h-screen">
                <div className="flex flex-1 items-center">
                    <img
                        className="object-cover relative h-full "
                        src={checkoutImg}
                        alt=""
                    />
                </div>

                <div className="flex flex-col flex-1 justify-center items-center mt-28">
                    <h1 className=" font-avernir-heavy font-bold z-10 mb-10 text-5xl tracking-wider md:text-4xl lg:text-4xl ">
                        Checkout
                    </h1>
                    <form className="w-full px-32 pb-32 pt-10" action="">
                        <div className="flex flex-col mb-6">
                            <label
                                className="font-serif mb-2 text-primary-5 text-sm"
                                htmlFor=""
                            >
                                Card Number
                            </label>
                            <input
                                className="border p-2 placeholder-gray-300"
                                type="text"
                                placeholder="0000 0000 0000 0000"
                            ></input>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label
                                className="font-serif mb-2 text-primary-5 text-sm"
                                htmlFor=""
                            >
                                Cardholder Name
                            </label>
                            <input
                                className="border p-2 placeholder-gray-300"
                                type="text"
                                placeholder="Full Name"
                            ></input>
                        </div>

                        <div className="flex flex-col mb-6">
                            <div className="">
                                <label
                                    className="font-serif mb-2 text-primary-5 text-sm"
                                    htmlFor=""
                                >
                                    Expiration Date
                                </label>
                            </div>
                            <div className="flex flex-row">
                                <input
                                    className="border p-2 mr-5 placeholder-gray-300"
                                    type="text"
                                    placeholder="MM"
                                ></input>
                                <input
                                    className="border p-2 placeholder-gray-300"
                                    type="text"
                                    placeholder="YYYY"
                                ></input>
                            </div>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label
                                className="font-serif mb-2 text-primary-5 text-sm"
                                htmlFor=""
                            >
                                CVC
                            </label>
                            <input
                                className="border p-2 placeholder-gray-300"
                                type="text"
                                placeholder="000"
                            ></input>
                        </div>

                        <div className="flex flex-col justify-center items-center text-center mt-20">
                            <button className="bg-secondary-1 text-white rounded-[8px] border-2 h-12 px-16 mb-6 w-2/4">
                                Confirm
                            </button>

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
        </>
    );
}

export default Checkout;
