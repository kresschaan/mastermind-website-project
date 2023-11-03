import quoteImg from "../assets/images/mastermind-quote-section.jpg";
import footerLogo from "../assets/images/mastermind-logo.svg";
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
            <div className="mb-6 flex flex-col lg:mx-5 lg:flex-row">
                <div className="flex w-3/4 flex-col md:w-1/4">
                    <div className="mx-8 mb-2 mt-5 flex h-3/4 w-3/5">
                        <div className="flex flex-row items-center">
                            <img
                                className="w-26 h-16"
                                src={footerLogo}
                                alt="Footer Image - Mastermind"
                                draggable="false"
                                loading="lazy"
                            />
                            <h2 className="font-avenir-heavy text-2xl">
                                Mastermind
                            </h2>
                        </div>
                    </div>
                    <div className="mx-12 flex h-3/4 w-full">
                        <div className="flex flex-col">
                            <h2 className="mt-5 text-xl">Copyright © 2023</h2>
                            <h2 className="mt-2 text-sm">
                                Mastermind the masterclass
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Navigation and Contact */}
                <div className="flex grow flex-col">
                    <div className="mx-12 mb-2 mt-8 flex flex-col justify-between lg:flex-row">
                        <FooterNav isLink={false}></FooterNav>

                        <div className="justify-center">
                            <button
                                className="h-12 rounded-[14px] border-2 bg-secondary-1 px-16 text-white"
                                onClick={handleContactUs}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <hr className="mx-auto w-full items-center py-2"></hr>

                    {/* Social Icons and Phone Number */}
                    <div className="mx-8 flex flex-row justify-between">
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
