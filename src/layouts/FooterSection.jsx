import quoteImg from "../assets/images/mastermind-quote-section.jpg";
import footerLogo from "../assets/images/mastermind-logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function FooterSection() {
    return (
        <div className="my-5">
            <div className="flex flex-col justify-center items-center text-center">
                <img className="w-screen" src={quoteImg} alt="" />
                <h1 className="absolute font-serif text-5xl text-white mt-32 ml-10">
                    Make your ambitions come true.
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row mx-5">
                <div className="flex flex-col w-1/4">
                    <div className="flex mx-8 mt-5 mb-2 w-3/5 h-3/4">
                        <div className="flex flex-row items-center">
                            <img
                                className="h-16 w-26"
                                src={footerLogo}
                                alt=""
                            />
                            <h2 className="font-avenir-heavy text-2xl">
                                Mastermind
                            </h2>
                        </div>
                    </div>
                    <div className="flex mx-12 w-[26rem] h-3/4">
                        <div className="flex flex-row lg:flex-col">
                            <h2 className="text-xl mt-5">Copyright © 2023</h2>
                            <h2 className="text-sm mt-5 ml-5 lg:ml-0">
                                Mastermind the masterclass
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col grow">
                    <div className="flex flex-row justify-between mx-12 mt-8 mb-2">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex flex-col">
                                <div className="border-black border-l-[3px] mb-4">
                                    <a className="ml-2" href="#">
                                        Home
                                    </a>
                                </div>
                                <div className="border-black border-l-[3px] mb-4">
                                    <a className="ml-2" href="#">
                                        Plan & Pricing
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col lg:mx-24 xl:mx-36">
                                <div className="border-black border-l-[3px] mb-4">
                                    <a className="ml-2" href="#">
                                        About
                                    </a>
                                </div>
                                <div className="border-black border-l-[3px] mb-4">
                                    <a className="ml-2" href="#">
                                        Sign Up
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="border-black border-l-[3px] mb-4">
                                    <a className="ml-2" href="#">
                                        Log In
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="justify-center">
                            <button class="bg-secondary-1 text-white rounded-[14px] border-2 h-12 px-16">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <hr className="w-full mx-auto py-2 items-center"></hr>

                    <div className="flex flex-row justify-between mx-8">
                        <div className="flex flex-row">
                            <div className="pr-2">
                                <FaFacebook className="h-8 w-8" />
                            </div>
                            <div className="pr-2">
                                <FaTwitter className="h-8 w-8" />
                            </div>
                            <div className="pr-2">
                                <FaInstagram className="h-8 w-8" />
                            </div>
                        </div>

                        <div className="pr-2">
                            <p>Give us a Call (023) 456-2312</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
