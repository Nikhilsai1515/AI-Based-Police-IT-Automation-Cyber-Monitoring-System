import { useEffect, useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

function Tickets() {

    // STORE TICKETS
    const [tickets, setTickets] = useState([]);

    // SEARCH STATE
    const [search, setSearch] = useState("");

    // FILTER STATE
    const [statusFilter, setStatusFilter] = useState("All");

    // GET TOKEN
    const token = localStorage.getItem("token");

    // GET USER
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    // FETCH ALL TICKETS
    useEffect(() => {

        axios.get(

            "http://127.0.0.1:5000/tickets",

            {
                headers: {

                    Authorization: `Bearer ${token}`

                }
            }

        )

        .then((res) => {

            setTickets(res.data);

        })

        .catch((err) => {

            console.log(err);

            toast.error("Error loading tickets");

        });

    }, []);

    // UPDATE TICKET
    const updateTicket = async (id) => {

        try {

            await axios.put(

                `http://127.0.0.1:5000/ticket/update/${id}`,

                {},

                {
                    headers: {

                        Authorization: `Bearer ${token}`

                    }
                }

            );

            toast.success("Ticket Completed");

            setTimeout(() => {

                window.location.reload();

            }, 1000);

        }

        catch (err) {

            console.log(err);

            toast.error("Error updating ticket");

        }
    };

    // DELETE TICKET
    const deleteTicket = async (id) => {

        try {

            await axios.delete(

                `http://127.0.0.1:5000/ticket/delete/${id}`,

                {
                    headers: {

                        Authorization: `Bearer ${token}`

                    }
                }

            );

            toast.success("Ticket Deleted");

            setTimeout(() => {

                window.location.reload();

            }, 1000);

        }

        catch (err) {

            console.log(err);

            toast.error("Error deleting ticket");

        }
    };

    // FILTER LOGIC
    const filteredTickets = tickets.filter((ticket) => {

        const matchesSearch = ticket.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =

            statusFilter === "All"
            ||
            ticket.status === statusFilter;

        return matchesSearch && matchesStatus;

    });

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">

                All Tickets

            </h1>

            {/* SEARCH + FILTER */}

            <div className="flex gap-4 mb-6">

                <input
                    type="text"
                    placeholder="Search tickets..."
                    className="border p-3 w-1/2 rounded"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border p-3 rounded"
                    onChange={(e) => setStatusFilter(e.target.value)}
                >

                    <option>All</option>

                    <option>Pending</option>

                    <option>Completed</option>

                </select>

            </div>

            {/* TABLE */}

            <table className="w-full border">

                <thead>

                    <tr className="bg-gray-200">

                        <th className="border p-3">
                            ID
                        </th>

                        <th className="border p-3">
                            Title
                        </th>

                        <th className="border p-3">
                            Priority
                        </th>

                        <th className="border p-3">
                            Status
                        </th>

                        <th className="border p-3">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {filteredTickets.map((ticket) => (

                        <tr key={ticket.id}>

                            <td className="border p-3">
                                {ticket.id}
                            </td>

                            <td className="border p-3">
                                {ticket.title}
                            </td>

                            <td className="border p-3">
                                {ticket.priority}
                            </td>

                            <td className="border p-3">
                                {ticket.status}
                            </td>

                            <td className="border p-3">

                                <button
                                    onClick={() => updateTicket(ticket.id)}
                                    className="bg-green-600 text-white px-4 py-2 rounded"
                                >

                                    Complete

                                </button>

                                {/* ADMIN ONLY */}

                                {user?.role === "Admin" && (

                                    <button
                                        onClick={() => deleteTicket(ticket.id)}
                                        className="bg-red-600 text-white px-4 py-2 rounded ml-2"
                                    >

                                        Delete

                                    </button>

                                )}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Tickets;