import React, { useState } from "react";
import "./Signup.css";
import Validation from "./Validation";
import { Link } from "react-router-dom";

const Signup = ({ submitForm }) => {
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phonenumber, setPhoneNumber] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //console.log(fullname, email, password, phonenumber);

    try {
      const response = await fetch("http://localhost:5000/user/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullname,
          password: password,
          email: email,
          phonenumber: phonenumber,
        }),
      });

      const responseData = await response.json();
      //console.log(responseData);

      //redirect to login
    } catch (err) {
      console.log(err);
    }
  };

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
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
              {/* {errors.fullname && <p className="errors text-danger">{errors.fullname}</p>} */}
            </div>

            <div className="Email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {errors.Email && <p className="errors">{errors.Email}</p>} */}
            </div>
            <div className="Password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {errors.password && <p className="errors">{errors.password}</p>} */}
            </div>
            <div className="PhoneNumber">
              <label className="label">PhoneNumber</label>
              <input
                className="input"
                type="tel"
                name="PhoneNumber"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {/* {errors.PhoneNumber && <p className="errors">{errors.PhoneNumber}</p>} */}
            </div>
            <div>
              <button className="submit">Signup</button>
              <br />
              <div>
                <Link to="/Login">
                  {" "}
                  <p>Already have an Account--Login</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
