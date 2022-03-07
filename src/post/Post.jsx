import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        className="post_image"
      />
      <div className="post_info">
        <div className="post_categories">
          <span className="post_category">Music</span>
          <span className="post_category">Life</span>
        </div>

        <span className="post_title">Lorem, ipsum dolor</span>
        <hr />
        <span className="post_date">1 hour ago</span>
      </div>
      <p className="post_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit
        nam architecto eum, illum praesentium doloremque libero, doloribus
        quaerat natus excepturi recusandae saepe ab ex, magnam facilis molestias
        velit voluptatem!
      </p>
    </div>
  );
}

export default Post;
