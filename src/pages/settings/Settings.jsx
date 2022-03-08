import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings_wrapper">
        <div className="settings_title">
          <div className="settings_update_title">Update Your Account</div>
          <div className="settings_delete_title">Delete Account</div>
        </div>
        <form className="settings_form">
          <label>Profile Picture</label>
          <div className="settings_pp">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
            <label htmlFor="file_input">
              <i className="settings_pp_icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file_input" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="your name" />
          <label>Email</label>
          <input type="emial" placeholder="your email address" />
          <label>Password</label>
          <input type="password" />
          <button className="settings_submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
