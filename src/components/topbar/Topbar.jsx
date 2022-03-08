import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="top_left">
        <i class="top_left_icon fa-brands fa-facebook-f"></i>
        <i class="top_left_icon fa-brands fa-twitter"></i>
        <i class="top_left_icon fa-brands fa-pinterest-p"></i>
        <i class="top_left_icon fa-brands fa-instagram"></i>
      </div>
      <div className="top_center">
        <ul className="topbar_list">
          <li className="topbar_list_item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topbar_list_item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topbar_list_item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topbar_list_item">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topbar_list_item">
            {/* <Link className="link" to="/logout"></Link> */}
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="top_right">
        {user ? (
          <img
            className="profilePic"
            src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        ) : (
          <>
            <ul className="topbar_list">
              <li className="topbar_list_item">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="topbar_list_item">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
        <i class="top_right_icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
