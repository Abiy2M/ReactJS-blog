import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <div className="header_titles_sm">React & Node</div>
        <div className="header_titles_lg">Blog</div>
      </div>
      <img
        className="header_image "
        src="https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
    </div>
  );
}

export default Header;
