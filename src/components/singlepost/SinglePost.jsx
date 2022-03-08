import React from "react";
import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="single_post">
      <div className="single_post_wrapper"></div>
      <img
        src="https://images.pexels.com/photos/1260591/pexels-photo-1260591.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
        className="single_post_image"
      />
      <h1 className="single_post_title">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        fugiat.
        <div className="single_post_edit">
          <i className="single_post_icon far fa-edit"></i>
          <i className="single_post_icon far fa-trash"></i>
        </div>
      </h1>
      <div className="single_post_info">
        <span className="single_post_author">
          Author: <b>Abiy</b>
        </span>
        <span className="single_post_date">1 hour ago</span>
      </div>
      <p className="single_post_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad
        doloremque voluptates ipsa perspiciatis molestias nihil dolore? Totam,
        pariatur error. Dignissimos doloremque optio ipsa delectus, ea eaque
        nemo unde id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem ad doloremque voluptates ipsa perspiciatis molestias nihil
        dolore? Totam, pariatur error. Dignissimos doloremque optio ipsa Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad
        doloremque voluptates ipsa perspiciatis molestias nihil dolore? Totam,
        pariatur error. Dignissimos doloremque optio ipsa delectus, ea eaque
        nemo unde id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem ad doloremque voluptates ipsa perspiciatis molestias nihil
        dolore? Totam, pariatur error. Dignissimos doloremque optio ipsa
        delectus, ea eaque nemo unde id.
      </p>
    </div>
  );
}

export default SinglePost;
