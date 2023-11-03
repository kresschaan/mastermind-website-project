import contactUs from "../assets/images/contactus.jpg";
import NavBar from "../components/NavBar";
import FormContact from "../components/FormContact";
import Modal from "../components/Modal";
import { useLocation } from "react-router-dom";

function Contact() {
    const { state } = useLocation();

    return (
        <>
            <NavBar isLink={true}></NavBar>
            <div className="flex h-screen flex-col md:flex-row">
                <div className="flex flex-1 items-center">
                    <img
                        className="h-full w-full object-cover"
                        src={contactUs}
                        alt="Contact - Mastermind"
                        draggable="false"
                        loading="lazy"
                    />
                </div>

                <div className="absolute flex h-screen w-full flex-1 flex-col items-center justify-center overflow-auto lg:relative">
                    <FormContact></FormContact>
                </div>
            </div>
            <Modal></Modal>
        </>
    );
}

export default Contact;
