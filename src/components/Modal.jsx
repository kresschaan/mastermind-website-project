import { useState } from "react";
import navlogo from "../assets/images/letter-m.png";
import successlogo from "../assets/images/register-success.png";
import NavBarItems from "./NavBarItems";
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
                <div className="flex justify-center items-center bg-primary-4/40 fixed z-10 top-0 h-screen w-screen">
                    <div className="bg-white py-8 w-fit lg:w-5/12 h-[400px] rounded-xl ">
                        <div className="flex justify-end mx-10 hover:cursor-pointer">
                            <GrClose onClick={handleModalChange}></GrClose>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <img
                                className="h-24 w-24 mb-10 mr-2"
                                src={successlogo}
                                alt=""
                            />
                            <h1 className="font-serif text-4xl mb-6">
                                Congratulations!
                            </h1>
                            <h2 className="font-serif text-xl">
                                Registration successful you can now login!
                            </h2>
                        </div>

                        <div className="flex justify-end my-14 mx-10">
                            <input
                                type="submit"
                                value="Start Now"
                                className="bg-secondary-1 text-white rounded-[8px] border-2 h-12 px-16 mb-6 hover:cursor-pointer"
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
