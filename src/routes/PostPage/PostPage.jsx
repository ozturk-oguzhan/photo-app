import React from "react";
import "./PostPage.css";
import { Link } from "react-router";
import PostPageFunc from "../../components/PostPageFunc/PostPageFunc";
import PostPageComments from "../../components/PostPageComments/PostPageComments";
const PostPage = () => {
  return (
    <div className="post-page">
      <img src="/general/arrow.svg" alt="" className="back" />
      <div className="post-container">
        <div className="post-image">
          <img src="/pins/pin1.jpeg" alt="" />
        </div>
        <div className="post-detail">
          <PostPageFunc />
          <Link to="/john" className="user-detail">
            <img src="/general/noAvatar.png" alt="" />
            <span>John Doe</span>
          </Link>
          <PostPageComments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
