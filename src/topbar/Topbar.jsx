import React from "react";
import "./Topbar.css";

function Topbar() {
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
          <li className="topbar_list_item">Home</li>
          <li className="topbar_list_item">About</li>
          <li className="topbar_list_item">Contact</li>
          <li className="topbar_list_item">Write</li>
          <li className="topbar_list_item">Logout</li>
        </ul>
      </div>
      <div className="top_right">
        <img
        className="profilePic"
          src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <i class="top_right_icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
