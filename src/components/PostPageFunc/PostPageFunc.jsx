import React from "react";
import "./PostPageFunc.css";
const PostPageFunc = () => {
  return (
    <div className="post-page-func">
      <div className="func">
        <span>321</span>
        <button className="func">
          <img src="/general/share.svg" alt="" />
        </button>
        <button className="func">
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
      <button className="save-btn">Save</button>
    </div>
  );
};

export default PostPageFunc;
