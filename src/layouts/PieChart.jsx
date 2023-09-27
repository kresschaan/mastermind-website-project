import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Classes Taken",
            },
        },
    };

    const data = {
        labels: ["Business", "Leadership", "Marketing"],
        datasets: [
            {
                label: "Classes Taken",
                data: [12, 19, 3],
                backgroundColor: [
                    "rgba(143, 161, 176, 1)",
                    "rgba(238, 227, 203, 1)",
                    "rgba(181, 161, 146, 1)",
                ],
                borderColor: [
                    "rgba(143, 161, 176, 1)",
                    "rgba(238, 227, 203, 1)",
                    "rgba(181, 161, 146, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie options={options} data={data} />;
}

export default PieChart;
