function PlanPrice() {
    return (
        <div id="plans-pricing">
            <h1 className="text-4xl pb-2">Best Pricing Plan for You</h1>
            <h2 className="text-2xl font-light">
                Pricing plans for every budget
            </h2>

            <div className="plans-price-container">
                <div className="plan-container">
                    <h4 className="pr-10 mb-5 text-xl">Choose plan</h4>

                    <div className="plan-item mb-2">
                        <input type="radio" />
                        <label className="ml-4">Yearly Billing</label>
                    </div>
                    <div className="plan-item ml-2">
                        <input type="radio" />
                        <label className="ml-4">Monthy Billing</label>
                    </div>
                </div>

                <div className="pricing-card-standard">
                    <h3 className="pricing-header">Discover</h3>
                    <h3>Explore your potential</h3>

                    <div className="pricing-amount">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">20</h4>
                    </div>

                    <hr className="pricing-line"></hr>

                    <p className="pb-2">24/7 Customer Support</p>
                    <p className="pb-2">Online Resources</p>
                    <p className="pb-2 mb-14">Weekly Trainings</p>

                    <div className="pt-10 pb-5 justify-center">
                        <button className="pricing-button">Select Plan</button>
                    </div>
                </div>

                <div className="pricing-card-standard">
                    <h3 className="pricing-header">Prime</h3>
                    <h3>Alpha in the making</h3>

                    <div className="pricing-amount">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">50</h4>
                    </div>

                    <hr className="pricing-line"></hr>

                    <p className="pb-2">24/7 Customer Support</p>
                    <p className="pb-2">Group Coaching and Classes</p>
                    <p className="pb-2">Online Resources</p>
                    <p className="pb-2">Weekly Trainings</p>

                    <div className="pt-16 pb-5 justify-center">
                        <button className="pricing-button">Select Plan</button>
                    </div>
                </div>

                <div className="pricing-card-premium">
                    <h3 className="pricing-header">Elite</h3>
                    <h3>For dedicated individuals</h3>

                    <div className="pricing-amount">
                        <h4 className="pr-2 text-xl">$</h4>
                        <h4 className="text-5xl">100</h4>
                    </div>

                    <hr className="pricing-line"></hr>

                    <div className="font-serif font-light">
                        <p className="pb-4">24/7 Customer Support</p>
                        <p className="pb-4">Group Coaching and Classes</p>
                        <p className="pb-4">Online Resources</p>
                        <p className="pb-4">Private Individual Sessions</p>
                        <p className="pb-4">Weekly Trainings</p>

                        <div className="pb-4 justify-center">
                            <button className="pricing-button">
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
