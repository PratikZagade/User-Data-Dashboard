import React from "react";
import { useState } from "react";
const Usersfiled = ({ register }) => {
  //This is hook is used to manage the input field of form
  const [formData, setformData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  //To manage the password (hide and show)
  const [showPassword, setshowPassword] = useState(false);
  //To show error message of input filed
  const [error, seterror] = useState({});

  //Create a function for manage the state of input fields
  const inputChangeHandle = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  //Validate Input Field

  const validateInputFiled = () => {
    let newError = {};

    if (!/^[A-Za-z\s]{2,}$/.test(formData.fullName)) {
      ///^[A-Za-z\s]{2,}+$/.test('Virat')
      newError.fullName = "Enter Valid FullName minimum 2 character required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      // username  @domain  .
      //agar [^] me hum ^ symbol use karate hai toh uska meaning hota hai woh character hume use nahi karana hai
      newError.email = "Enter Valid Email";
    }

    if (!/^[A-Za-z0-9]{4,10}$/.test(formData.username)) {
      newError.username =
        "Username only accept Letters and Numbers. 4 - 10 Character required, no space use";
    }

    if (!/^[A-Z][@#*%A-Za-z0-9]{6,10}$/.test(formData.password)) {
      newError.password =
        "Password Must start with Uppercase, password must have one special charcter from @,#,* and % , one numbers and 6 - 10 charcter long, no space use";
    }
    seterror(newError)
    return Object.keys(newError).length === 0
  };

  //function to register a data
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
      setshowPassword(false)
    }
  };
  return (
    <div className="bg-dark w-50 p-4 mx-auto rounded-3 mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter User Full Name"
          className="form-control mb-3"
          value={formData.fullName}
          name="fullName"
          onChange={inputChangeHandle}
        />
        <strong className="text-danger">{error.fullName}</strong>
        <input
          type="email"
          placeholder="Enter Valid Email"
          className="form-control mb-3"
          value={formData.email}
          name="email"
          onChange={inputChangeHandle}
        />
        <strong className="text-danger">{error.email}</strong>
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control mb-3"
          value={formData.username}
          name="username"
          onChange={inputChangeHandle}
        />
        <strong className="text-danger">{error.username}</strong>
        {/* <div className="d-flex">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Valid Password"
            className="form-control mb-3 me-3"
            name="password"
            value={formData.password}
            onChange={inputChangeHandle}
          />
          <span className="text-light fs-3" onClick={()=>setshowPassword(!showPassword)}>
            {
                showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>
            }
          
          </span>
        </div> */}

        <div className="position-relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Valid Password"
            className="form-control mb-3 me-3"
            name="password"
            value={formData.password}
            onChange={inputChangeHandle}
          />
          {formData.password.length > 0 && (
            <i
              className={`
                    ${showPassword ? "bi bi-eye-slash" : "bi bi-eye"} position-absolute top-0 end-0 p-2
                `}
              style={{ cursor: "pointer" }}
              onClick={() => setshowPassword(!showPassword)}
            />
          )}
        </div>
        <strong className="text-danger">{error.password}</strong>
        <div className="text-center">
          <button className="btn btn-success">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Usersfiled;