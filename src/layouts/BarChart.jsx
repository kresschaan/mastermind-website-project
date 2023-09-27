import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Yearly Statistics",
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Classes",
                data: labels.map(() => faker.number.int({ min: 0, max: 20 })),
                backgroundColor: "rgba(143, 161, 176, 1)",
            },
            {
                label: "Certificates",
                data: labels.map(() => faker.number.int({ min: 0, max: 10 })),
                backgroundColor: "rgba(238, 227, 203, 1)",
            },
        ],
    };

    return <Bar options={options} data={data} />;
}

export default BarChart;
