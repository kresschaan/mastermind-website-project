import { Navigate, useNavigate } from "react-router-dom";

function PriceButton({ price, plan }) {
    const navigate = useNavigate();

    const handleSelectPlan = () => {
        if (price && plan) {
            navigate("/register", { state: { price: price, plan: plan } });
        }

        if (!price && !plan) {
            navigate("/register", { state: { price: "", plan: "" } });
        }
    };

    return (
        <button className="pricing-button" onClick={() => handleSelectPlan()}>
            Select Plan
        </button>
    );
}

export default PriceButton;
