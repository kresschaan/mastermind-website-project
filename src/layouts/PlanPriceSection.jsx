function PlanPriceSection() {
    return (
        <div className="flex font-avenir flex-col justify-center  text-center w-screen mt-32 py-32 bg-background-1">
            <h1 className="text-4xl pb-2">Best Pricing Plan for You</h1>
            <h2 className="text-2xl font-light">
                Pricing plans for every budget
            </h2>

            <div className="flex w-full h-[40rem] p-20">
                <div className="w-full h-full">
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

                <div className="flex flex-col justify-evenly bg-white border-t border-l border-b border-black border-opacity-10 w-full h-full">
                    <h3 className="pt-10 text-xl">Discover</h3>
                    <h3>Explore your potential</h3>

                    <p className="flex my-5 pr-2 flex-row justify-center">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">20</h4>
                    </p>

                    <hr className="w-3/4 mx-auto py-2 items-center"></hr>

                    <p className="pb-2">24/7 Customer Support</p>
                    <p className="pb-2">Online Resources</p>
                    <p className="pb-2 mb-14">Weekly Trainings</p>

                    <div className="pt-10 pb-5 justify-center">
                        <button class="rounded-[14px] border-2 w-10/12 h-12">
                            Select Plan
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly bg-white border-t border-l border-b border-black border-opacity-10 w-full h-full">
                    <h3 className="pt-10 text-xl">Prime</h3>
                    <h3>Alpha in the making</h3>

                    <p className="flex my-5 pr-2 flex-row justify-center">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">50</h4>
                    </p>

                    <hr className="w-3/4 mx-auto py-2 items-center"></hr>

                    <p className="pb-2">24/7 Customer Support</p>
                    <p className="pb-2">Group Coaching and Classes</p>
                    <p className="pb-2">Online Resources</p>
                    <p className="pb-2">Weekly Trainings</p>

                    <div className="pt-16 pb-5 justify-center">
                        <button class="rounded-[14px] border-2 w-10/12 h-12">
                            Select Plan
                        </button>
                    </div>
                </div>
                <div className="bg-secondary-1 text-white border border-black border-opacity-10 rounded-lg w-full h-full ml-2 scale-110">
                    <h3 className="pt-10 text-xl">Elite</h3>
                    <h3>For dedicated individuals</h3>

                    <p className="flex my-5 pr-2 flex-row justify-center">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">100</h4>
                    </p>

                    <hr className="w-3/4 mx-auto py-2 items-center"></hr>

                    <div className="font-serif font-light">
                        <p className="pb-4">24/7 Customer Support</p>
                        <p className="pb-4">Group Coaching and Classes</p>
                        <p className="pb-4">Online Resources</p>
                        <p className="pb-4">Private Individual Sessions</p>
                        <p className="pb-4">Weekly Trainings</p>

                        <div className="pt-4 justify-center">
                            <button class="rounded-[14px] border-2 w-10/12 h-12">
                                Select Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanPriceSection;
