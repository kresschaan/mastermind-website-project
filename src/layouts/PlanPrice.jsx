import PlanPriceButton from "../components/PriceButton";
import PlanSelect from "../components/PlanSelect";
import { useState } from "react";

function PlanPrice() {
    const [plan, setPlan] = useState();

    const handleSelect = (plan) => {
        setPlan(plan);
    };

    return (
        <div id="plans-pricing">
            <h1 className="pb-2 text-4xl">Best Pricing Plan for You</h1>
            <h2 className="text-2xl font-light">
                Pricing plans for every budget
            </h2>

            <PlanSelect handleSelect={handleSelect}></PlanSelect>

            <div className="plans-price-container">
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
                    <p className="mb-14 pb-2">Weekly Trainings</p>

                    <div className="justify-center pb-5 pt-10">
                        <PlanPriceButton
                            price={20}
                            plan={plan}
                        ></PlanPriceButton>
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

                    <div className="justify-center pb-5 pt-16">
                        <PlanPriceButton
                            price={50}
                            plan={plan}
                        ></PlanPriceButton>
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

                        <div className="justify-center pb-4">
                            <PlanPriceButton
                                price={100}
                                plan={plan}
                            ></PlanPriceButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanPrice;
