import quoteImg from "../assets/images/mastermind-quote-section.jpg";
import footerLogo from "../assets/images/mastermind-logo.png";

function FooterSection() {
    return (
        <div className="my-5">
            <div className="flex flex-col justify-center items-center text-center w-screen">
                <img className="w-screen" src={quoteImg} alt="" />
                <h1 className="absolute font-serif text-5xl text-white mt-32 ml-10">
                    Make your ambitions come true.
                </h1>
            </div>
            <div className="flex w-3/5 h-3/4">
                <div className="flex flex-row items-center">
                    <img className="h-32 w-32" src={footerLogo} alt="" />
                    <h2>Masterclass</h2>
                </div>
            </div>
            <div className="flex mx-12 w-3/5 h-3/4">
                <div className="flex flex-col">
                    <h2 className="text-xl mt-5">Copyright © 2023</h2>
                    <h2 className="text-sm">Mastermind the masterclass</h2>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
