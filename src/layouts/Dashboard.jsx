import logo from "../assets/images/mastermind-logo.png";
import { FaAngleDown, FaBell } from "react-icons/fa";

function Dashboard() {
    return (
        <div className="flex flex-row ">
            <div className="flex flex-col p-10 h-screen border-r">
                <div className="flex flex-row pr-8">
                    <img className="h-16 w-20" src={logo} alt="" />
                    <h2 className="mt-4 font-avenir-heavy text-2xl">
                        Mastermind
                    </h2>
                </div>

                <div className="mt-28 px-2 ml-2 w-full">
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
            </div>

            <div className="flex flex-col w-screen">
                <div className="flex flex-row justify-between p-10 border-b">
                    <div>
                        <h3 className="font-serif mt-1 text-primary-5 text-3xl">
                            DASHBOARD
                        </h3>
                    </div>

                    <div className="flex flex-row">
                        <img src="" alt="" />
                        <div className="flex flex-col">
                            <p>Welcome Christian</p>
                            <p>August 31, 2023 11:53 PM</p>
                        </div>

                        <div className="p-2 ml-5 border-l">
                            <FaBell className="text-3xl"></FaBell>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col m-10 border-b">
                    <div className="flex flex-col">
                        <h4 className="font-serif mb-2 text-primary-5 text-sm">
                            SUBSCRIBED UNTIL
                        </h4>
                        <h3>December 23, 2023</h3>
                    </div>

                    <div className="flex flex-row justify-evenly mt-10 mb-6">
                        <div className="justify-center">
                            <button className="bg-secondary-1 text-white rounded-[14px] border-2 h-12 px-16">
                                Contact Us
                            </button>
                        </div>
                        <div className="justify-center">
                            <button className="bg-secondary-1 text-white rounded-[14px] border-2 h-12 px-16">
                                Contact Us
                            </button>
                        </div>
                        <div className="justify-center">
                            <button className="bg-secondary-1 text-white rounded-[14px] border-2 h-12 px-16">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-evenly mx-10">
                    <div className="rounded-xl p-16 shadow-lg">
                        <h3 className="mb-4">Total Classes Enrolled</h3>
                        <p className="text-center text-4xl">12</p>
                    </div>
                    <div className="rounded-xl p-16 shadow-lg">
                        <h3 className="mb-4">Total Private Sessions</h3>
                        <p className="text-center text-4xl">12</p>
                    </div>
                    <div className="rounded-xl p-16 shadow-lg">
                        <h3 className="mb-4">Total Certificates Earned</h3>
                        <p className="text-center text-4xl">12</p>
                    </div>
                    <div className="rounded-xl p-16 shadow-lg">
                        <h3 className="mb-4">Scheduled Classes for Today</h3>
                        <p className="text-center text-4xl">12</p>
                    </div>
                </div>

                <div className="flex flex-row justify-evenly m-10">
                    <div className="flex flex-col w-2/4 mr-10">
                        <h4 className="">Upcoming Schedules</h4>

                        <div className="max-h-[500px] overflow-auto">
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div class="rounded-full bg-slate-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>

                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div class="rounded-full bg-slate-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div class="rounded-full bg-orange-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div class="rounded-full bg-sky-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div class="rounded-full bg-emerald-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                            <div className="border mb-2 p-4">
                                <div className="flex flex-row">
                                    <div class="rounded-full bg-emerald-500 mt-1 mr-2 h-4 w-4"></div>
                                    <p className="mb-2">10:30 PM</p>
                                </div>
                                <p className="pl-6">
                                    Entrepreneurship and Business Coaching
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/4 max-h-[500px] p-4 mx-2 border rounded-lg overflow-auto">
                        <h4 className="border-b mb-4">Learning Summary</h4>
                        <h5>Entrepreneurship and Business Coaching</h5>
                        <ul class="list-disc p-4">
                            <li className="mb-6">
                                Self-awareness: Leadership development starts
                                with self-awareness. Learn to recognize their
                                strengths, weaknesses, values, and personal
                                leadership style.
                            </li>
                            <li className="mb-6">
                                Communication Skills: Effective leaders are
                                excellent communicators. Develop skills in
                                active listening, clear articulation, and the
                                ability to inspire and motivate their teams
                                through effective communication.
                            </li>
                            <li className="mb-6">
                                Understanding legal requirements for starting
                                and operating a business.
                            </li>
                            <li className="mb-6">
                                Effective time management techniques for
                                entrepreneurs and prioritizing tasks and
                                avoiding burnout.
                            </li>
                            <li className="mb-6">
                                Entrepreneurship is the process of creating,
                                developing, and managing a business venture with
                                the aim of making a profit.
                            </li>
                            <li className="mb-6">
                                Entrepreneurship is the process of creating,
                                developing, and managing a business venture with
                                the aim of making a profit.
                            </li>
                            <li className="mb-6">
                                The significance of a well-structured business
                                plan, including the executive summary, market
                                analysis, financial projections, and operational
                                strategy.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
