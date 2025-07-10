import React, { useEffect, useRef, useState } from "react";
import "./PostPageComments.css";
import { useAddCommentMutation } from "../../utils/fetchPins";
import { useParams } from "react-router";

const PostPageComments = ({ comments, fetchPost }) => {
  const [addComment] = useAddCommentMutation();
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const wrapperRef = useRef(null);

  async function onSubmitCommit(e) {
    e.preventDefault();
    try {
      const res = await addComment({ pinID: id, desc: comment }).unwrap();
      if (res) {
        await fetchPost();
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    wrapperRef.current?.scrollTo({
      top: wrapperRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [comments]);
  return (
    <div className="post-comments" ref={wrapperRef}>
      <div className="comment-main">
        <span>Comments</span>
        <div className="comments">
          {comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <img
                src={
                  comment.user.img?.includes("https")
                    ? comment.user.img
                    : `http://localhost:3000${comment.user.img}`
                }
                alt=""
              />
              <div className="comment-info">
                <h4>{comment.user.displayName}</h4>
                <p>{comment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="comment-input">
        <input
          type="text"
          placeholder="Add Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={onSubmitCommit}>submit</button>
      </div>
    </div>
  );
};

export default PostPageComments;
