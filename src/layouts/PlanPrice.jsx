function PlanPrice() {
    return (
        <div id="plans-pricing">
            <h1 className="text-4xl pb-2">Best Pricing Plan for You</h1>
            <h2 className="text-2xl font-light">
                Pricing plans for every budget
            </h2>

            <div className="flex flex-col w-full p-5 lg:p-20 lg:flex-row">
                <div className="w-full h-full py-5 mb-5 lg:p-10 lg:mb-5">
                    <h4 className="pr-10 mb-5 text-xl">Choose plan</h4>

                    <div className="flex flex-row justify-center mb-2">
                        <input type="radio" />
                        <label className="ml-4">Yearly Billing</label>
                    </div>
                    <div className="flex flex-row justify-center ml-2">
                        <input type="radio" />
                        <label className="ml-4">Monthy Billing</label>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly bg-white border-t border-l border-b border-black border-opacity-10 mb-5 lg:mb-0 w-full h-full">
                    <h3 className="pt-10 text-xl">Discover</h3>
                    <h3>Explore your potential</h3>

                    <div className="flex my-5 pr-2 flex-row justify-center">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">20</h4>
                    </div>

                    <hr className="w-3/4 mx-auto py-2 items-center"></hr>

                    <p className="pb-2">24/7 Customer Support</p>
                    <p className="pb-2">Online Resources</p>
                    <p className="pb-2 mb-14">Weekly Trainings</p>

                    <div className="pt-10 pb-5 justify-center">
                        <button className="rounded-[14px] border-2 w-10/12 h-12">
                            Select Plan
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly bg-white border-t border-l border-b border-black border-opacity-10 mb-5 lg:mb-0 w-full h-full">
                    <h3 className="pt-10 text-xl">Prime</h3>
                    <h3>Alpha in the making</h3>

                    <div className="flex my-5 pr-2 flex-row justify-center">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">50</h4>
                    </div>

                    <hr className="w-3/4 mx-auto py-2 items-center"></hr>

                    <p className="pb-2">24/7 Customer Support</p>
                    <p className="pb-2">Group Coaching and Classes</p>
                    <p className="pb-2">Online Resources</p>
                    <p className="pb-2">Weekly Trainings</p>

                    <div className="pt-16 pb-5 justify-center">
                        <button className="rounded-[14px] border-2 w-10/12 h-12">
                            Select Plan
                        </button>
                    </div>
                </div>
                <div className="bg-secondary-1 text-white border border-black border-opacity-10 rounded-lg mb-5 lg:mb-0 w-full lg:ml-2 lg:scale-110">
                    <h3 className="pt-10 text-xl">Elite</h3>
                    <h3>For dedicated individuals</h3>

                    <div className="flex my-5 pr-2 flex-row justify-center">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">100</h4>
                    </div>

                    <hr className="w-3/4 mx-auto py-2 items-center"></hr>

                    <div className="font-serif font-light">
                        <p className="pb-4">24/7 Customer Support</p>
                        <p className="pb-4">Group Coaching and Classes</p>
                        <p className="pb-4">Online Resources</p>
                        <p className="pb-4">Private Individual Sessions</p>
                        <p className="pb-4">Weekly Trainings</p>

                        <div className="pb-4 justify-center">
                            <button className="rounded-[14px] border-2 w-10/12 h-12">
                                Select Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanPrice;
