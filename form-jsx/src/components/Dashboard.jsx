import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const userName = localStorage.getItem("loggedUser");

    const logout = () => {

        if (window.confirm("Are you sure you want to Logout?")) {

            localStorage.removeItem("loggedUser");

            navigate("/");

        }

    };

    return (

        <div className="container mt-5">

            <div className="w-50 mx-auto border border-5 border-info rounded p-5 text-center">

                <h1 className="mb-4">
                    Welcome, {userName}
                </h1>

                <button
                    className="btn btn-danger fw-bold"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </div>

    );
};

export default Dashboard;