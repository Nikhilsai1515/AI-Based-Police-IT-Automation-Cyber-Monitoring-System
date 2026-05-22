import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

function ExcelUpload() {

    const [file, setFile] = useState(null);

    const [result, setResult] = useState(null);

    const uploadFile = async () => {

        const formData = new FormData();

        formData.append(
            "file",
            file
        );

        try {

            const res = await axios.post(
                "http://127.0.0.1:5000/upload",
                formData
            );

            setResult(res.data);

            toast.success("Excel Processed Successfully");

        }

        catch (err) {

            toast.error("Error uploading excel");

        }
    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">

                Excel Automation

            </h1>

            <input
                type="file"
                accept=".xlsx,.xls"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-6"
            />

            <br />

            <button
                onClick={uploadFile}
                className="bg-blue-600 text-white px-6 py-3 rounded"
            >

                Upload Excel

            </button>

            {result && (

                <div className="mt-10 border p-6 rounded bg-gray-100">

                    <h2 className="text-2xl font-bold mb-4">

                        File Analytics

                    </h2>

                    <p>

                        <strong>Rows:</strong>

                        {result.rows}

                    </p>

                    <p className="mt-3">

                        <strong>Columns:</strong>

                    </p>

                    <ul className="list-disc ml-6">

                        {result.columns.map((col, index) => (

                            <li key={index}>
                                {col}
                            </li>

                        ))}

                    </ul>

                </div>

            )}

        </div>
    );
}

export default ExcelUpload;