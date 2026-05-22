import { Link } from "react-router-dom";

function Sidebar() {

    // GET USER
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    // LOGOUT FUNCTION
    const logout = () => {

        // CLEAR STORAGE
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        // RELOAD APP
        window.location.href = "/";
    };

    return (

        <div className="w-64 h-screen bg-gray-900 text-white fixed p-6">

            {/* LOGO */}

            <h1 className="text-2xl font-bold mb-10">

                Police IT System

            </h1>

            {/* USER INFO */}

            <div className="mb-8 p-4 bg-gray-800 rounded">

                <p className="text-sm text-gray-400">

                    Logged in as

                </p>

                <h2 className="font-bold">

                    {user?.role}

                </h2>

            </div>

            {/* MENU */}

            <ul className="space-y-5">

                {/* DASHBOARD */}

                <li>

                    <Link
                        to="/dashboard"
                        className="hover:text-blue-400"
                    >

                        Dashboard

                    </Link>

                </li>

                {/* CREATE TICKET */}

                {["Admin", "Officer"].includes(user?.role) && (

                    <li>

                        <Link
                            to="/create-ticket"
                            className="hover:text-blue-400"
                        >

                            Create Ticket

                        </Link>

                    </li>

                )}

                {/* TICKETS */}

                <li>

                    <Link
                        to="/tickets"
                        className="hover:text-blue-400"
                    >

                        Tickets

                    </Link>

                </li>

                {/* AI SUMMARIZER */}

                {["Admin", "Analyst"].includes(user?.role) && (

                    <li>

                        <Link
                            to="/summarizer"
                            className="hover:text-blue-400"
                        >

                            AI Summarizer

                        </Link>

                    </li>

                )}

                {/* EXCEL AUTOMATION */}

                {["Admin", "Analyst"].includes(user?.role) && (

                    <li>

                        <Link
                            to="/excel-upload"
                            className="hover:text-blue-400"
                        >

                            Excel Upload

                        </Link>

                    </li>

                )}

            </ul>

            {/* LOGOUT */}

            <button
                onClick={logout}
                className="mt-12 bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full"
            >

                Logout

            </button>

        </div>
    );
}

export default Sidebar;