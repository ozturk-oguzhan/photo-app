import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { Link, useParams } from "react-router";
import PostPageFunc from "../../components/PostPageFunc/PostPageFunc";
import PostPageComments from "../../components/PostPageComments/PostPageComments";
import {
  useLazyGetPinQuery,
  useLazyGetCommentsQuery,
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
    console.log(commentData);
    setPost(res);
  }
  useEffect(() => {
    setPost([]);
    fetchPost();
    console.log(post);
  }, []);
  return (
    <div className="post-page">
      <img src="/general/arrow.svg" alt="" className="back" />
      <div className="post-container">
        <div className="post-image">
          <img src={post?.media} alt="" />
        </div>
        <div className="post-detail">
          <PostPageFunc />
          <Link to={`/${post?.user?.username}`} className="user-detail">
            <img src={post?.user?.img} alt="" />
            <span>{post?.user?.displayName}</span>
          </Link>
          <PostPageComments comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
