import React, { useEffect, useState } from "react";
import "./PostPageFunc.css";
import {
  useLikePinMutation,
  useLazyIsLikePinQuery,
  useSavePinMutation,
  useLazyIsSavePinQuery,
} from "../../utils/fetchPins";
import { useParams } from "react-router";
const PostPageFunc = () => {
  const [likePin, { isLoading }] = useLikePinMutation();
  const [fetchIsLiked] = useLazyIsLikePinQuery();

  const [savePin, { isLoading: isSaveLoading }] = useSavePinMutation();
  const [fetchIsSaved] = useLazyIsSavePinQuery();

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { id } = useParams();
  async function onLike() {
    if (isLoading) return;
    const res = await likePin({ id }).unwrap();
    setIsLiked(res.message === "Liked");
  }
  async function onSave() {
    if (isLoading) return;
    const res = await savePin({ id }).unwrap();
    setIsSaved(res.message === "Saved");
  }
  const iPostLiked = async () => {
    const res = await fetchIsLiked({ id }).unwrap();
    setIsLiked(res.message === "Liked");
  };
  const iPostSaved = async () => {
    const res = await fetchIsSaved({ id }).unwrap();
    setIsSaved(res.message === "Saved");
  };
  useEffect(() => {
    iPostLiked();
    iPostSaved();
  }, []);
  return (
    <div className="post-page-func">
      <div className="func">
        <button className="func" onClick={onLike}>
          {isLiked ? (
            <img src="/general/like.png" alt="" />
          ) : (
            <img src="/general/dislike.png" alt="" />
          )}
        </button>
      </div>
      <button className="save-btn" onClick={onSave}>
        {isSaved ? "-Unsave" : "+Save"}
      </button>
    </div>
  );
};

export default PostPageFunc;
