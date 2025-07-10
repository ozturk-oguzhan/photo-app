import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { Link, useParams } from "react-router";
import PostPageFunc from "../../components/PostPageFunc/PostPageFunc";
import PostPageComments from "../../components/PostPageComments/PostPageComments";
import {
  useLazyGetPinQuery,
  useLazyGetCommentsQuery,
  useLikePinMutation,
} from "../../utils/fetchPins";
const PostPage = () => {
  const { id } = useParams();
  const [fetchPin] = useLazyGetPinQuery();
  const [fetchComment] = useLazyGetCommentsQuery();

  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  async function fetchPost() {
    const res = await fetchPin({ id }).unwrap();
    const commentData = await fetchComment({ postId: id }).unwrap();
    setComments(commentData);
    setPost(res);
  }
  useEffect(() => {
    setPost([]);
    fetchPost();
  }, []);
  return (
    <div className="post-page">
      <div className="post-container">
        <div className="post-image">
          <img
            src={
              post?.media?.includes("https")
                ? post?.media
                : `http://localhost:3000/uploads/${post?.media}`
            }
            alt=""
          />
        </div>
        <div className="post-detail">
          <PostPageFunc />
          <Link to={`/${post?.user?.username}`} className="user-detail">
            <img
              src={
                post?.user?.img?.includes("https")
                  ? post?.user?.img
                  : `http://localhost:3000${post?.user?.img}`
              }
              alt=""
            />
            <h3>{post?.user?.displayName}</h3>
          </Link>
          <h4>{post?.title}</h4>
          <span>{post?.description}</span>
          <hr />
          <PostPageComments comments={comments} fetchPost={fetchPost} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
