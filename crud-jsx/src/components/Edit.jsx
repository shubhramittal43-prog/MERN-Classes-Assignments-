import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/students/${id}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/students/${id}`, student)
      .then(() => {
        alert("Student Updated Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Edit Student</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={student.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <input
              type="text"
              className="form-control"
              name="course"
              value={student.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={student.city}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success me-2">
            Update Student
          </button>

          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Edit;