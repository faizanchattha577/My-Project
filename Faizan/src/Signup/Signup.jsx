import React, { useState } from "react";
import "./Signup.css";
import Validation from "./Validation";
import { Link } from "react-router-dom";

const Signup = ({ submitForm}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    PhoneNumber:"",
  });
  const [errors, setErrors] = useState({});
 

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setErrors(Validation(values));
    console.log(values);
    try {
     
      const response = await fetch(
        "http://localhost:5000/user/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.fullname,
            email: values.email,
            phone: values.phone,
            password: values.password,
          }),
        }
      );

      const responseData = await response.json();
  }
  catch (err) {
    console.log(err)
  }
}



  return (
    <>
      <div className="container1">
        <div className="app-wrapper">
          <div>
            <h2 className="title"> Create Account</h2>
          </div>
          <form className="form-wrapper" onSubmit={handleFormSubmit}>
            <div className="name">
              <label className="label">Full Name</label>
              <input
                className="input"
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="errors text-danger">{errors.fullname}</p>}
            </div>

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
            <div className="PhoneNumber">
              <label className="label">PhoneNumber</label>
              <input
                className="input"
                type="tel"
                name="PhoneNumber"
                value={values.PhoneNumber}
                onChange={handleChange}
              />
              {errors.PhoneNumber && <p className="errors">{errors.PhoneNumber}</p>}
            </div>
            <div>

              <button
                className="submit"
              >

                Signup
              </button>
              <br />
              <div>
                <Link to="/Login"> <p>Already have an Account--Login</p></Link>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
