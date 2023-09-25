import { useEffect, useState } from "react";

function PlanSelect({ handleSelect }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleOnSelect = (event) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        handleSelect(selectedValue);
    }, [selectedValue]);

    return (
        <div className="plan-container">
            <h4 className="pr-10 mb-5 text-xl">Choose plan</h4>
            <div className="plan-item mb-2">
                <input
                    type="radio"
                    value="Yearly"
                    checked={selectedValue === "Yearly"}
                    onChange={(e) => handleOnSelect(e)}
                />
                <label className="ml-4">Yearly Billing</label>
            </div>
            <div className="plan-item ml-2">
                <input
                    type="radio"
                    value="Monthly"
                    checked={selectedValue === "Monthly"}
                    onChange={(e) => handleOnSelect(e)}
                />
                <label className="ml-4">Monthy Billing</label>
            </div>
        </div>
    );
}

export default PlanSelect;
