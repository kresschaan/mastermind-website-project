import quoteImg from "../assets/images/mastermind-quote-section.jpg";
import footerLogo from "../assets/images/mastermind-logo.png";
import FooterNav from "../components/FooterNav";
import Social from "../components/Social";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const handleContactUs = () => {
        navigate("/contact");
    };

    return (
        <div className="footer-section">
            <div className="footer-feature">
                <img className="w-screen" src={quoteImg} alt="" />
                <h1 className="footer-title">Make your ambitions come true.</h1>
            </div>

            {/* Footer Content */}
            <div className="flex flex-col lg:flex-row lg:mx-5 mb-6">
                <div className="flex flex-col w-3/4 md:w-1/4">
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
                    <div className="flex mx-12 w-full h-3/4">
                        <div className="flex flex-col">
                            <h2 className="text-xl mt-5">Copyright © 2023</h2>
                            <h2 className="text-sm mt-2">
                                Mastermind the masterclass
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Navigation and Contact */}
                <div className="flex flex-col grow">
                    <div className="flex flex-col lg:flex-row justify-between mx-12 mt-8 mb-2">
                        <FooterNav isLink={false}></FooterNav>

                        <div className="justify-center">
                            <button
                                className="bg-secondary-1 text-white rounded-[14px] border-2 h-12 px-16"
                                onClick={handleContactUs}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <hr className="w-full mx-auto py-2 items-center"></hr>

                    {/* Social Icons and Phone Number */}
                    <div className="flex flex-row justify-between mx-8">
                        <Social></Social>

                        <div className="pr-2">
                            <p>Give us a Call (023) 456-2312</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
