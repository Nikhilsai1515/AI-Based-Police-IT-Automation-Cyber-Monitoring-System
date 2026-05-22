import { useEffect, useState } from "react";

import axios from "axios";

import {
    Pie
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function Dashboard() {

    const [stats, setStats] = useState({

        total: 0,

        pending: 0,

        completed: 0

    });

    useEffect(() => {

        axios.get(
            "http://127.0.0.1:5000/stats"
        )

        .then((res) => {

            setStats(res.data);

        })

        .catch((err) => {

            console.log(err);

        });

    }, []);

    const chartData = {

        labels: [

            "Pending",

            "Completed"

        ],

        datasets: [

            {

                label: "Tickets",

                data: [

                    stats.pending,

                    stats.completed

                ],

                backgroundColor: [

                    "#facc15",

                    "#22c55e"

                ],

                borderWidth: 1

            }

        ]

    };

    return (

        <div className="p-10">

            <h1 className="text-4xl font-bold mb-10">

                Police IT Dashboard

            </h1>

            {/* CARDS */}

            <div className="grid grid-cols-3 gap-6 mb-10">

                <div className="bg-blue-600 text-white p-6 rounded-lg shadow">

                    <h2 className="text-xl mb-2">

                        Total Tickets

                    </h2>

                    <p className="text-3xl font-bold">

                        {stats.total}

                    </p>

                </div>

                <div className="bg-yellow-500 text-white p-6 rounded-lg shadow">

                    <h2 className="text-xl mb-2">

                        Pending

                    </h2>

                    <p className="text-3xl font-bold">

                        {stats.pending}

                    </p>

                </div>

                <div className="bg-green-600 text-white p-6 rounded-lg shadow">

                    <h2 className="text-xl mb-2">

                        Completed

                    </h2>

                    <p className="text-3xl font-bold">

                        {stats.completed}

                    </p>

                </div>

            </div>

            {/* CHART */}

            <div className="bg-white p-10 rounded-lg shadow w-1/2">

                <h2 className="text-2xl font-bold mb-6">

                    Ticket Analytics

                </h2>

                <Pie data={chartData} />

            </div>

        </div>
    );
}

export default Dashboard;