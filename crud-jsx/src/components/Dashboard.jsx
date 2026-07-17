import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      let res = await axios.get("http://localhost:3000/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:3000/students/${id}`);
        alert("Student Deleted Successfully");
        getAllStudents();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Student Management System</h2>

        <Link to="/add" className="btn btn-primary">
          Add Student
        </Link>
      </div>

      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>{student.city}</td>

                <td>
                  <Link
                    to={`/edit/${student.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(student.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Students Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;