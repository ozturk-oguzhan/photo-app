import React, { useState } from "react";
import "./PostPageComments.css";
const PostPageComments = ({ comments }) => {
  return (
    <div className="post-comments">
      <div className="comment-main">
        <span>Comments</span>
        <div className="comments">
          {comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <img src={comment.user.img} alt="" />
              <div className="comment-info">
                <span>{comment.user.displayName}</span>
                <p>{comment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="comment-input">
        <input type="text" placeholder="Add Comment" />
      </div>
    </div>
  );
};

export default PostPageComments;
