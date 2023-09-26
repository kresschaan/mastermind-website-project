import { Navigate, useNavigate } from "react-router-dom";

function PriceButton({ price, plan }) {
    const navigate = useNavigate();

    const handleSelectPlan = () => {
        const state = {
            price: price || "",
            plan: plan || "",
        };

        navigate("/register", { state });
    };

    return (
        <button className="pricing-button" onClick={() => handleSelectPlan()}>
            Select Plan
        </button>
    );
}

export default PriceButton;
