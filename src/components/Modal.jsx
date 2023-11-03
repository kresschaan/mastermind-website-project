import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/index";
import { useNavigate } from "react-router-dom";

function Modal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDialogBoxOpen = useSelector((state) => {
        return state.modal.isOpen;
    });

    const handleModalChange = () => {
        dispatch(openModal(false));
    };

    const navigateToSignIn = () => {
        navigate("/login");
    };

    return (
        <>
            {isDialogBoxOpen && (
                <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-primary-4/40">
                    <div className="h-[400px] w-fit rounded-xl bg-white py-8 lg:w-5/12 ">
                        <div className="mx-10 flex justify-end hover:cursor-pointer">
                            <GrClose onClick={handleModalChange}></GrClose>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            {/* <img
                                className="mb-10 mr-2 h-24 w-24"
                                src={successlogo}
                                alt=""
                            /> */}
                            <h1 className="mb-6 font-serif text-4xl">
                                Congratulations!
                            </h1>
                            <h2 className="font-serif text-xl">
                                Registration successful you can now login!
                            </h2>
                        </div>

                        <div className="mx-10 my-14 flex justify-end">
                            <input
                                type="submit"
                                value="Start Now"
                                className="mb-6 h-12 rounded-[8px] border-2 bg-secondary-1 px-16 text-white hover:cursor-pointer"
                                onClick={navigateToSignIn}
                            ></input>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
