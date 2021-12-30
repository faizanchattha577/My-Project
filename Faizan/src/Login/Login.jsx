import React, { useState } from "react";
import "./Login.css";
import Validation from "./Validation";
import { Link } from "react-router-dom";

const Login = ({ submitForm}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
 

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.Email]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    
  };


  return (
    <>
      <div className="container1">
        <div className="app-wrapper">
          <div>
            <h2 className="title"> Login Account</h2>
          </div>
          <form className="form-wrapper" onSubmit={handleFormSubmit}>
           
            <div className="Email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.Email && <p className="errors">{errors.Email}</p>}
            </div>
            <div className="Password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="errors">{errors.password}</p>}
            </div>
            <div>

              <button
                className="submit"
              >

                Login
              </button>
               <br />
              <div>
                <Link to="/Signup"> <p>Register Now</p></Link>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
