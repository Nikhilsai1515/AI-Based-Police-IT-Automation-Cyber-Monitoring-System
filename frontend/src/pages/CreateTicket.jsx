import { toast } from "react-toastify";

import { useState } from "react";

import axios from "axios";

function CreateTicket() {

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [priority, setPriority] = useState("Low");

    const createTicket = async () => {

        try {

            // GET TOKEN
            const token = localStorage.getItem("token");

            // GET USER
            const user = JSON.parse(
                localStorage.getItem("user")
            );

            const res = await axios.post(

                "http://127.0.0.1:5000/ticket/create",

                {
                    title,
                    description,
                    priority,
                    user_id: user.user_id
                },

                {
                    headers: {

                        Authorization: `Bearer ${token}`

                    }
                }
            );

            toast.success(res.data.msg);

            // CLEAR INPUTS
            setTitle("");

            setDescription("");

            setPriority("Low");

        }

        catch (err) {

            toast.error("Error creating ticket");

        }
    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">

                Create Ticket

            </h1>

            <input
                type="text"
                placeholder="Ticket Title"
                value={title}
                className="border p-3 w-full mb-4 rounded"
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Description"
                value={description}
                className="border p-3 w-full mb-4 rounded"
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                value={priority}
                className="border p-3 w-full mb-4 rounded"
                onChange={(e) => setPriority(e.target.value)}
            >

                <option>Low</option>

                <option>Medium</option>

                <option>High</option>

            </select>

            <button
                onClick={createTicket}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >

                Submit Ticket

            </button>

        </div>
    );
}

export default CreateTicket;