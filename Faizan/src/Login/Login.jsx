import React, { useState, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth";

const Login = ({ submitForm }) => {
  const context = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //console.log(email, password);

    try {
      const response = await fetch(
        `http://localhost:5000/user/get/${email}/${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
      
      if (responseData.status !== 200) {
      }

      context.login(responseData._id);
      // redirect 

    } catch (err) {
      console.log(err);
    }
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
            <div>
              <button className="submit">Login</button>
              <br />
              <div>
                <Link to="/Signup">
                  {" "}
                  <p>Register Now</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
