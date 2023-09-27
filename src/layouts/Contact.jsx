import contactUs from "../assets/images/contactus.jpg";
import navlogo from "../assets/images/mastermind-logo.png";
import NavBar from "../components/NavBar";
import FormContact from "../components/FormContact";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";

function Contact() {
    const { state } = useLocation();

    return (
        <>
            <NavBar isLink={true}></NavBar>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="flex flex-1 items-center">
                    <img
                        className="object-cover h-full w-full"
                        src={contactUs}
                        alt=""
                    />
                </div>

                <div className="flex flex-col flex-1 justify-center items-center absolute overflow-auto w-full h-screen lg:relative">
                    <FormContact></FormContact>
                </div>
            </div>
            <Modal></Modal>
        </>
    );
}

export default Contact;
