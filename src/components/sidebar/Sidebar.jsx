import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">About Me</span>
        <img
          className="sidebar_image"
          src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quos tempore quibusdam placeat voluptatem totam?
        </p>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">Categories</span>
        <ul className="sidebar_list">
          <li className="sidebar_list_item">Life</li>
          <li className="sidebar_list_item">Music</li>
          <li className="sidebar_list_item">Style</li>
          <li className="sidebar_list_item">Sport</li>
          <li className="sidebar_list_item">Tech</li>
          <li className="sidebar_list_item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">Follow Me</span>
        <ul className="sidebar_list_social">
          <i class="sidebar_icon fa-brands fa-facebook-f"></i>
          <i class="sidebar_icon fa-brands fa-twitter"></i>
          <i class="sidebar_icon fa-brands fa-pinterest-p"></i>
          <i class="sidebar_icon fa-brands fa-instagram"></i>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
