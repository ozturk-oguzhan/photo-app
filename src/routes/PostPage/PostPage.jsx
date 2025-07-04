import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { Link, useParams } from "react-router";
import PostPageFunc from "../../components/PostPageFunc/PostPageFunc";
import PostPageComments from "../../components/PostPageComments/PostPageComments";
import { useLazyGetPinQuery } from "../../utils/fetchPins";
const PostPage = () => {
  const { id } = useParams();
  const [fetchPin] = useLazyGetPinQuery();
  const [post, setPost] = useState();
  async function fetchPost() {
    const res = await fetchPin({ id }).unwrap();
    console.log(res);
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
          <PostPageComments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
