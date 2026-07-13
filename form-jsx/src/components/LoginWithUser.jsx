import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginWithUser = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        localStorage.setItem("loggedUser", userName);

        navigate("/dashboard");

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
                    Login With User
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
                        required
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
                        required
                    />

                </div>

                <input
                    type="submit"
                    value="Login"
                    className="btn btn-info fw-bold w-100"
                />

            </form>

        </div>
    );
};

export default LoginWithUser;