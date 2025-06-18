import React from "react";
import "./PostPage.css";
import { Link } from "react-router";
const PostPage = () => {
  return (
    <div className="post-page">
      <img src="/general/arrow.svg" alt="" className="back" />
      <div className="post-container">
        <div className="post-image">
          <img src="/pins/pin1.jpeg" alt="" />
        </div>
        <div className="post-detail">
          <Link to="/john" className="user-detail">
            <img src="/general/noAvatar.png" alt="" />
            <span>John Doe</span>
          </Link>
          <span>Comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
