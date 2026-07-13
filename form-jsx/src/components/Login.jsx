import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(userName);
        console.log(password);

        setUserName("");
        setPassword("");
    };

    return (
        <div className="container mt-5">

            <form
                className="w-50 border border-5 border-info rounded p-5 m-auto"
                onSubmit={handleSubmit}
            >

                <p className="fs-2 fw-bold text-center border-bottom border-5 border-info rounded-pill pb-2">
                    Login
                </p>

                <div className="mb-3">

                    <label className="form-label fs-5">
                        User Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter User Name"
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label fs-5">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />

                </div>

                <input
                    type="submit"
                    value="Login"
                    className="btn btn-info fw-bold w-100"
                />

                <p className="text-center mt-3 mb-0">
                    Don't have an account?{" "}
                    <span
                        className="fw-bold text-info text-decoration-underline"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/register")}
                    >
                        Click Here to Register
                    </span>
                </p>

            </form>

        </div>
    );
};

export default Login;