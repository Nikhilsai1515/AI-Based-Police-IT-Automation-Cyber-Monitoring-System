import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

function Summarizer() {

    const [text, setText] = useState("");

    const [summary, setSummary] = useState("");

    const generateSummary = async () => {

        try {

            const res = await axios.post(
                "http://127.0.0.1:5000/summarize",
                {
                    text
                }
            );

            setSummary(res.data.summary);

            toast.success("AI Summary Generated");

        }

        catch (err) {

            toast.error("Error generating summary");

        }
    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">

                AI Report Summarizer

            </h1>

            <textarea
                rows="10"
                placeholder="Paste long report here..."
                className="border p-4 w-full mb-6"
                onChange={(e) => setText(e.target.value)}
            />

            <button
                onClick={generateSummary}
                className="bg-blue-600 text-white px-6 py-3 rounded"
            >

                Generate Summary

            </button>

            <div className="mt-10">

                <h2 className="text-2xl font-bold mb-4">

                    AI Summary

                </h2>

                <div className="border p-5 bg-gray-100 rounded">

                    {summary}

                </div>

            </div>

        </div>
    );
}

export default Summarizer;