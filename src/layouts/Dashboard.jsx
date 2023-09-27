import logo from "../assets/images/mastermind-logo.png";
import { useEffect, useState } from "react";
import { FaAngleDown, FaBell } from "react-icons/fa";
import { FcGraduationCap, FcDiploma1, FcPlanner, FcVip } from "react-icons/fc";
import Logout from "../components/Logout.jsx";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const navToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    useEffect(() => {
        // Function to update screen width and height
        const updateScreenSize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add a resize event listener
        window.addEventListener("resize", updateScreenSize);

        if (screenWidth >= 1024) {
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, [screenWidth]); // Empty dependency array to run the effect only once

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col p-10 lg:h-screen">
                <div className="flex flex-row justify-between lg:pr-8">
                    <div className="flex flex-row">
                        <img className="h-16 w-20" src={logo} alt="" />
                        <h2 className="mt-4 font-avenir-heavy text-2xl pr-10">
                            Mastermind
                        </h2>
                    </div>

                    <div
                        id="menu-btn"
                        className={`h-12 w-12 mt-2 hover:cursor-pointer lg:hidden ${
                            isMenuOpen ? "open" : ""
                        }`}
                        onClick={() => navToggle()}
                    >
                        <span className="hamburger-top hamburger-dashboard mb-4"></span>
                        <span className="hamburger-middle hamburger-dashboard mb-4"></span>
                        <span className="hamburger-bottom hamburger-dashboard mb-4"></span>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="mt-14 lg:mt-28 px-2 ml-2 w-full">
                        <div className="flex flex-row justify-between border-b mb-8">
                            <h3 className="font-serif mb-2 text-primary-5 text-sm">
                                DASHBOARD
                            </h3>
                            <FaAngleDown className="text-2xl mx-2 text-primary-5"></FaAngleDown>
                        </div>
                        <div className="flex flex-row justify-between border-b mb-8">
                            <h3 className="font-serif mb-2 text-primary-5 text-sm">
                                SCHEDULE
                            </h3>
                            <FaAngleDown className="text-2xl mx-2 text-primary-5"></FaAngleDown>
                        </div>
                        <div className="flex flex-row justify-between border-b mb-8">
                            <h3 className="font-serif mb-2 text-primary-5 text-sm">
                                TRAININGS
                            </h3>
                            <FaAngleDown className="text-2xl mx-2 text-primary-5"></FaAngleDown>
                        </div>
                        <div className="flex flex-row justify-between border-b mb-8">
                            <h3 className="font-serif mb-2 text-primary-5 text-sm">
                                ACCOUNT
                            </h3>
                            <FaAngleDown className="text-2xl mx-2 text-primary-5"></FaAngleDown>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col w-screen border-l">
                <div className="flex flex-row justify-between py-10 px-2 border-b">
                    <div className="hidden sm:flex">
                        <h3 className="font-serif mt-1 pl-8 text-primary-5 text-xl lg:text-3xl">
                            DASHBOARD
                        </h3>
                    </div>

                    <div className="flex flex-row justify-center items-center pl-8">
                        <img src="" alt="" />
                        <div className="flex flex-col">
                            <p>Welcome Christian</p>
                            <p>August 31, 2023 11:53 PM</p>
                        </div>

                        <div className="p-2 px-4 ml-5 border-l hover:cursor-pointer">
                            <FaBell className="text-3xl"></FaBell>
                        </div>

                        <Logout></Logout>
                    </div>
                </div>

                <div className="flex flex-col m-10 border-b">
                    <div className="flex flex-col">
                        <h4 className="font-serif mb-2 text-primary-5 text-sm">
                            SUBSCRIBED UNTIL
                        </h4>
                        <h3>December 23, 2023</h3>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-evenly mt-10 mb-6">
                        <div className="justify-center h-72 mb-10 lg:mb-0">
                            <BarChart className=""></BarChart>
                        </div>
                        <div className="justify-center h-72 mb-10 lg:mb-0">
                            <LineChart></LineChart>
                        </div>
                        <div className="justify-center h-72 mb-10 lg:mb-0">
                            <PieChart></PieChart>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-center lg:flex-row justify-between mx-10">
                    <div className="flex flex-row justify-center items-center w-full lg:w-6/12 p-4 py-10 m-2 shadow-lg rounded-xl mb-4 hover:cursor-pointer">
                        <div className="flex flex-col rounded-full p-4 bg-slate-300 h-">
                            <FcGraduationCap className="text-4xl text-slate"></FcGraduationCap>
                        </div>

                        <div className="flex flex-col ml-4">
                            <h3 className="mb-4">Classes Enrolled</h3>
                            <p className="text-center text-4xl">12</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full lg:w-6/12 p-4 py-10 m-2 shadow-lg rounded-xl mb-4 hover:cursor-pointer">
                        <div className="flex flex-col rounded-full p-4 bg-slate-300">
                            <FcVip className="text-4xl text-slate"></FcVip>
                        </div>

                        <div className="flex flex-col ml-4">
                            <h3 className="mb-4">Private Session</h3>
                            <p className="text-center text-4xl">12</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full lg:w-6/12 p-4 py-10 m-2 shadow-lg rounded-xl mb-4 hover:cursor-pointer">
                        <div className="flex flex-col rounded-full p-4 bg-slate-300 h-">
                            <FcDiploma1 className="text-4xl text-slate"></FcDiploma1>
                        </div>

                        <div className="flex flex-col ml-4">
                            <h3 className="mb-4">Certificates Earned</h3>
                            <p className="text-center text-4xl">12</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full lg:w-6/12 p-4 py-10 m-2 shadow-lg rounded-xl mb-4 hover:cursor-pointer">
                        <div className="flex flex-col rounded-full p-4 bg-slate-300 h-">
                            <FcPlanner className="text-4xl text-slate"></FcPlanner>
                        </div>

                        <div className="flex flex-col ml-4">
                            <h3 className="mb-4">Classes Today</h3>
                            <p className="text-center text-4xl">12</p>
                        </div>
                    </div>

                    {/* <div className="rounded-xl p-16 border-b shadow-lg mb-4 hover:cursor-pointer">
                        <h3 className="mb-4">Total Private Sessions</h3>
                        <p className="text-center text-4xl">12</p>
                    </div>
                    <div className="rounded-xl p-16 border-b shadow-lg mb-4 hover:cursor-pointer">
                        <h3 className="mb-4">Total Certificates Earned</h3>
                        <p className="text-center text-4xl">12</p>
                    </div>
                    <div className="rounded-xl p-16 border-b shadow-lg mb-4 hover:cursor-pointer">
                        <h3 className="mb-4">Scheduled Classes for Today</h3>
                        <p className="text-center text-4xl">12</p>
                    </div> */}
                </div>

                <div className="flex flex-col lg:flex-row justify-evenly m-10">
                    <div className="flex flex-col w-full lg:w-2/4 mr-10">
                        <h4 className="mb-4">Upcoming Schedules</h4>

                        <div className="max-h-[500px] overflow-auto">
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div className="rounded-full bg-slate-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>

                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div className="rounded-full bg-slate-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div className="rounded-full bg-orange-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div className="rounded-full bg-sky-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div className="rounded-full bg-emerald-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div className="rounded-full bg-emerald-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/4 mt-10 lg:mt-0 max-h-[530px] mx-0 lg:mx-2 ">
                        <h4 className="mb-4">Learning Summary</h4>

                        <div className="border rounded-lg p-4 overflow-auto">
                            <h5>Entrepreneurship and Business Coaching</h5>
                            <ul className="list-disc p-4">
                                <li className="mb-6">
                                    Self-awareness: Leadership development
                                    starts with self-awareness. Learn to
                                    recognize their strengths, weaknesses,
                                    values, and personal leadership style.
                                </li>
                                <li className="mb-6">
                                    Communication Skills: Effective leaders are
                                    excellent communicators. Develop skills in
                                    active listening, clear articulation, and
                                    the ability to inspire and motivate their
                                    teams through effective communication.
                                </li>
                                <li className="mb-6">
                                    Understanding legal requirements for
                                    starting and operating a business.
                                </li>
                                <li className="mb-6">
                                    Effective time management techniques for
                                    entrepreneurs and prioritizing tasks and
                                    avoiding burnout.
                                </li>
                                <li className="mb-6">
                                    Entrepreneurship is the process of creating,
                                    developing, and managing a business venture
                                    with the aim of making a profit.
                                </li>
                                <li className="mb-6">
                                    Entrepreneurship is the process of creating,
                                    developing, and managing a business venture
                                    with the aim of making a profit.
                                </li>
                                <li className="mb-6">
                                    The significance of a well-structured
                                    business plan, including the executive
                                    summary, market analysis, financial
                                    projections, and operational strategy.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
