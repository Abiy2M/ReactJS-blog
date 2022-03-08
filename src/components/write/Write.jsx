import React from "react";
import "./Write.css";

function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/134577/pexels-photo-134577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="write_image"
      />
      <form className="write_form">
        <div className="write_form_group">
          <label htmlFor="file_input">
            <i className="write_icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            name=""
            id="file_input"
            style={{ display: "none" }}
          />
          <input
            type="text"
            name=""
            placeholder="Title"
            className="write_input"
            autoFocus={true}
          />
        </div>
        <div className="write_form_group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write_input write_text"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="write_submit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
