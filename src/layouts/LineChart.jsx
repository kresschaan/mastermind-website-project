import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function LineChart() {
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Weekly Classes Attended",
            },
        },
    };

    const labels = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Private",
                data: labels.map(() =>
                    faker.number.int({ min: -1000, max: 1000 })
                ),
                borderColor: "rgba(143, 161, 176)",
                backgroundColor: "rgba(143, 161, 176, 1)",
            },
            {
                label: "Group",
                data: labels.map(() =>
                    faker.number.int({ min: -1000, max: 1000 })
                ),
                borderColor: "rgba(238, 227, 203)",
                backgroundColor: "rgba(238, 227, 203, 1)",
            },
        ],
    };

    return <Line options={options} data={data} />;
}

export default LineChart;
