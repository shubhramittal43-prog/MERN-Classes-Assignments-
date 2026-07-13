import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        phone: "",
        userName: "",
        password: "",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        localStorage.setItem("userData", JSON.stringify(formData));

        alert("Registration Successful");

        navigate("/login-user");

    };

    return (
        <div className="container mt-5">

            <form
                className="w-50 border border-5 border-info rounded p-5 m-auto"
                onSubmit={handleSubmit}
            >

                <p className="fs-2 fw-bold text-center border-bottom border-5 border-info rounded-pill pb-2">
                    Register
                </p>

                <div className="mb-3">

                    <label className="form-label fs-5">
                        Full Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        placeholder="Enter Full Name"
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label fs-5">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label fs-5">
                        Phone
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label fs-5">
                        User Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="Create User Name"
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label fs-5">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create Password"
                    />

                </div>

                <input
                    type="submit"
                    value="Register"
                    className="btn btn-info fw-bold w-100"
                />

                <p className="text-center mt-3 mb-0">
                    Already Registered?{" "}
                    <span
                        className="fw-bold text-info text-decoration-underline"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login-user")}
                    >
                        Click Here to Login
                    </span>
                </p>

            </form>

        </div>
    );
};

export default Register;