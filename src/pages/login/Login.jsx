import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <span className="login_title">Login</span>
      <form className="login_form">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="login_input"
          name=""
          id=""
          placeholder="Enter your Email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="login_input"
          name=""
          id=""
          placeholder="Enter your Password"
        />
        <button className="login_button">Login</button>
      </form>
      <button className="login_register_button">
        <Link className="link register_link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
