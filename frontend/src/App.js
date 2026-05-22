import {

    BrowserRouter,

    Routes,

    Route,

    Navigate

} from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import CreateTicket from "./pages/CreateTicket";

import Tickets from "./pages/Tickets";

import Summarizer from "./pages/Summarizer";

import ExcelUpload from "./pages/ExcelUpload";

function App() {

    // CHECK TOKEN
    const token = localStorage.getItem("token");

    return (

        <BrowserRouter>

            <ToastContainer />

            {/* IF NOT LOGGED IN */}

            {!token ? (

                <Login />

            ) : (

                <div className="flex">

                    <Sidebar />

                    <div className="ml-64 w-full p-6">

                        <Routes>

                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/dashboard"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/create-ticket"
                                element={<CreateTicket />}
                            />

                            <Route
                                path="/tickets"
                                element={<Tickets />}
                            />

                            <Route
                                path="/summarizer"
                                element={<Summarizer />}
                            />

                            <Route
                                path="/excel-upload"
                                element={<ExcelUpload />}
                            />

                            <Route
                                path="*"
                                element={<Navigate to="/" />}
                            />

                        </Routes>

                    </div>

                </div>

            )}

        </BrowserRouter>
    );
}

export default App;