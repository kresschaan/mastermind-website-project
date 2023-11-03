import logo from "../assets/images/mastermind-logo.svg";
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
                        <h2 className="mt-4 pr-10 font-avenir-heavy text-2xl">
                            Mastermind
                        </h2>
                    </div>

                    <div
                        id="menu-btn"
                        className={`mt-2 h-12 w-12 hover:cursor-pointer lg:hidden ${
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
                    <div className="ml-2 mt-14 w-full px-2 lg:mt-28">
                        <div className="mb-8 flex flex-row justify-between border-b">
                            <h3 className="mb-2 font-serif text-sm text-primary-5">
                                DASHBOARD
                            </h3>
                            <FaAngleDown className="mx-2 text-2xl text-primary-5"></FaAngleDown>
                        </div>
                        <div className="mb-8 flex flex-row justify-between border-b">
                            <h3 className="mb-2 font-serif text-sm text-primary-5">
                                SCHEDULE
                            </h3>
                            <FaAngleDown className="mx-2 text-2xl text-primary-5"></FaAngleDown>
                        </div>
                        <div className="mb-8 flex flex-row justify-between border-b">
                            <h3 className="mb-2 font-serif text-sm text-primary-5">
                                TRAININGS
                            </h3>
                            <FaAngleDown className="mx-2 text-2xl text-primary-5"></FaAngleDown>
                        </div>
                        <div className="mb-8 flex flex-row justify-between border-b">
                            <h3 className="mb-2 font-serif text-sm text-primary-5">
                                ACCOUNT
                            </h3>
                            <FaAngleDown className="mx-2 text-2xl text-primary-5"></FaAngleDown>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex w-screen flex-col border-l">
                <div className="flex flex-row justify-between border-b px-2 py-10">
                    <div className="hidden sm:flex">
                        <h3 className="mt-1 pl-8 font-serif text-xl text-primary-5 lg:text-3xl">
                            DASHBOARD
                        </h3>
                    </div>

                    <div className="flex flex-row items-center justify-center pl-8">
                        <img src="" alt="" />
                        <div className="flex flex-col">
                            <p>Welcome Christian</p>
                            <p>August 31, 2023 11:53 PM</p>
                        </div>

                        <div className="ml-5 border-l p-2 px-4 hover:cursor-pointer">
                            <FaBell className="text-3xl"></FaBell>
                        </div>

                        <Logout></Logout>
                    </div>
                </div>

                <div className="m-10 flex flex-col border-b">
                    <div className="flex flex-col">
                        <h4 className="mb-2 font-serif text-sm text-primary-5">
                            SUBSCRIBED UNTIL
                        </h4>
                        <h3>December 23, 2023</h3>
                    </div>

                    <div className="mb-6 mt-10 flex flex-col justify-evenly lg:flex-row">
                        <div className="mb-10 h-72 justify-center lg:mb-0">
                            <BarChart className=""></BarChart>
                        </div>
                        <div className="mb-10 h-72 justify-center lg:mb-0">
                            <LineChart></LineChart>
                        </div>
                        <div className="mb-10 h-72 justify-center lg:mb-0">
                            <PieChart></PieChart>
                        </div>
                    </div>
                </div>

                <div className="mx-10 flex flex-col justify-between text-center lg:flex-row">
                    <div className="m-2 mb-4 flex w-full flex-row items-center justify-center rounded-xl p-4 py-10 shadow-lg hover:cursor-pointer lg:w-6/12">
                        <div className="h- flex flex-col rounded-full bg-slate-300 p-4">
                            <FcGraduationCap className="text-slate text-4xl"></FcGraduationCap>
                        </div>

                        <div className="ml-4 flex flex-col">
                            <h3 className="mb-4">Classes Enrolled</h3>
                            <p className="text-center text-4xl">12</p>
                        </div>
                    </div>
                    <div className="m-2 mb-4 flex w-full flex-row items-center justify-center rounded-xl p-4 py-10 shadow-lg hover:cursor-pointer lg:w-6/12">
                        <div className="flex flex-col rounded-full bg-slate-300 p-4">
                            <FcVip className="text-slate text-4xl"></FcVip>
                        </div>

                        <div className="ml-4 flex flex-col">
                            <h3 className="mb-4">Private Session</h3>
                            <p className="text-center text-4xl">12</p>
                        </div>
                    </div>
                    <div className="m-2 mb-4 flex w-full flex-row items-center justify-center rounded-xl p-4 py-10 shadow-lg hover:cursor-pointer lg:w-6/12">
                        <div className="h- flex flex-col rounded-full bg-slate-300 p-4">
                            <FcDiploma1 className="text-slate text-4xl"></FcDiploma1>
                        </div>

                        <div className="ml-4 flex flex-col">
                            <h3 className="mb-4">Certificates Earned</h3>
                            <p className="text-center text-4xl">12</p>
                        </div>
                    </div>
                    <div className="m-2 mb-4 flex w-full flex-row items-center justify-center rounded-xl p-4 py-10 shadow-lg hover:cursor-pointer lg:w-6/12">
                        <div className="h- flex flex-col rounded-full bg-slate-300 p-4">
                            <FcPlanner className="text-slate text-4xl"></FcPlanner>
                        </div>

                        <div className="ml-4 flex flex-col">
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

                <div className="m-10 flex flex-col justify-evenly lg:flex-row">
                    <div className="mr-10 flex w-full flex-col lg:w-2/4">
                        <h4 className="mb-4">Upcoming Schedules</h4>

                        <div className="max-h-[500px] overflow-auto">
                            <div className="mb-2 border p-4">
                                <div className="flex flex-row">
                                    <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-slate-500"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>

                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="mb-2 border p-4">
                                <div className="flex flex-row">
                                    <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-slate-500"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="mb-2 border p-4">
                                <div className="flex flex-row">
                                    <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-orange-500"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="mb-2 border p-4">
                                <div className="flex flex-row">
                                    <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-sky-500"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="mb-2 border p-4">
                                <div className="flex flex-row">
                                    <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-emerald-500"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="mb-2 border p-4">
                                <div className="flex flex-row">
                                    <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-emerald-500"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-0 mt-10 flex max-h-[530px] w-full flex-col lg:mx-2 lg:mt-0 lg:w-2/4 ">
                        <h4 className="mb-4">Learning Summary</h4>

                        <div className="overflow-auto rounded-lg border p-4">
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
