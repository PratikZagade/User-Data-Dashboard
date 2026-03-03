import React, { useState, useEffect } from "react";

const Usersfiled = ({ register, editIndex, users }) => {
  const [formData, setformData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  const [error, seterror] = useState({});

  useEffect(() => {
    if (editIndex !== null && users[editIndex]) {
      setformData(users[editIndex]);
    }
  }, [editIndex, users]);

  const inputChangeHandle = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInputFiled = () => {
    let newError = {};

    if (!/^[A-Za-z\s]{2,}$/.test(formData.fullName)) {
      newError.fullName = "Minimum 2 characters required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newError.email = "Enter valid email";
    }

    if (!/^[A-Za-z0-9]{4,10}$/.test(formData.username)) {
      newError.username = "4-10 characters required";
    }

    if (!/^[A-Z][@#*%A-Za-z0-9]{6,10}$/.test(formData.password)) {
      newError.password = "Invalid password format";
    }

    seterror(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputFiled()) {
      register(formData);

      setformData({
        fullName: "",
        email: "",
        username: "",
        password: "",
      });

      setshowPassword(false);
      seterror({});
    }
  };

  return (
    <div className="card shadow border-0 mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-2"
            value={formData.fullName}
            name="fullName"
            onChange={inputChangeHandle}
          />
          <small className="text-danger">{error.fullName}</small>

          <input
            type="email"
            placeholder="Email"
            className="form-control mt-3"
            value={formData.email}
            name="email"
            onChange={inputChangeHandle}
          />
          <small className="text-danger">{error.email}</small>

          <input
            type="text"
            placeholder="Username"
            className="form-control mt-3"
            value={formData.username}
            name="username"
            onChange={inputChangeHandle}
          />
          <small className="text-danger">{error.username}</small>

          <div className="position-relative mt-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={inputChangeHandle}
            />
            {formData.password.length > 0 && (
              <i
                className={`${
                  showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                } position-absolute top-0 end-0 p-2`}
                style={{ cursor: "pointer" }}
                onClick={() => setshowPassword(!showPassword)}
              />
            )}
          </div>
          <small className="text-danger">{error.password}</small>

          <button className="btn btn-primary w-100 mt-4">
            {editIndex !== null ? "Update User" : "Register User"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Usersfiled;