import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <span className="register_title">Register</span>
      <form className="register_form">
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="register_input"
          name=""
          id=""
          placeholder="Enter your Username"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="register_input"
          name=""
          id=""
          placeholder="Enter your Email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="register_input"
          name=""
          id=""
          placeholder="Enter your Password"
        />
        <button className="register_login_button">
          <Link className="link login_link" to="/login">
            Login
          </Link>
        </button>
      </form>
      <button className="register_button">Register</button>
    </div>
  );
}
export default Register;
