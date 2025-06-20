import React, { useState } from "react";
import "./PostPageComments.css";
const PostPageComments = () => {
  const [comments, setComments] = useState([
    {
      img: "/general/noAvatar.png",
      name: "John",
      comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat",
    },
    {
      img: "/general/noAvatar.png",
      name: "John",
      comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat",
    },
    {
      img: "/general/noAvatar.png",
      name: "John",
      comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat",
    },
    {
      img: "/general/noAvatar.png",
      name: "John",
      comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat",
    },
    {
      img: "/general/noAvatar.png",
      name: "John",
      comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat",
    },
    {
      img: "/general/noAvatar.png",
      name: "John",
      comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat",
    },
  ]);
  return (
    <div className="post-comments">
      <span>Comments</span>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment">
            <img src={comment.img} alt="" />
            <div className="comment-info">
              <span>{comment.name}</span>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="comment-input">
        <input type="text" placeholder="Add Comment" />
      </div>
    </div>
  );
};

export default PostPageComments;
