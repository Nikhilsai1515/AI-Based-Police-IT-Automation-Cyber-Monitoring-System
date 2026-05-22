import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            const res = await axios.post(
                "http://127.0.0.1:5000/login",
                {
                    email,
                    password
                }
            );

            // STORE JWT TOKEN
            localStorage.setItem(
                "token",
                res.data.token
            );

            // STORE USER INFO
            localStorage.setItem(
                "user",
                JSON.stringify({
                    role: res.data.role,
                    user_id: res.data.user_id
                })
            );

            toast.success("Login Successful");

            // REDIRECT TO DASHBOARD
            navigate("/dashboard");

            // REFRESH APP
            window.location.reload();

        }

        catch (error) {

            toast.error("Invalid Credentials");

        }
    };

    return (

        <div className="flex items-center justify-center h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-lg shadow-lg w-96">

                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">

                    Police IT Login

                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border rounded mb-4"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                >

                    Login

                </button>

            </div>

        </div>
    );
}

export default Login;