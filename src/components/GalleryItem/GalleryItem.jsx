import React, { useEffect, useState } from "react";
import "./GalleryItem.css";
import { Link } from "react-router";
import {
  useLikePinMutation,
  useLazyIsLikePinQuery,
  useLazyIsSavePinQuery,
  useSavePinMutation,
} from "../../utils/fetchPins";
const GalleryItem = ({ item }) => {
  const [likePin, { isLoading }] = useLikePinMutation();
  const [fetchIsLiked] = useLazyIsLikePinQuery();

  const [savePin, { isLoading: isSaveLoading }] = useSavePinMutation();
  const [fetchIsSaved] = useLazyIsSavePinQuery();

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  async function onLike() {
    if (isLoading) return;
    const res = await likePin({ id: item._id }).unwrap();
    setIsLiked(res.message === "Liked");
  }
  async function onSave() {
    if (isSaveLoading) return;
    const res = await savePin({ id: item._id }).unwrap();
    setIsSaved(res.message === "Saved");
  }
  const iPostLiked = async () => {
    const res = await fetchIsLiked({ id: item._id }).unwrap();
    setIsLiked(res.message === "Liked");
  };
  const iPostSaved = async () => {
    const res = await fetchIsSaved({ id: item._id }).unwrap();
    setIsSaved(res.message === "Saved");
  };
  useEffect(() => {
    iPostLiked();
    iPostSaved();
  }, []);

  return (
    <div
      className="gallery-item"
      style={{
        gridRowEnd: `span ${Math.ceil(
          (item.height < 600 ? 600 : item.height) / 100
        )}`,
      }}
    >
      <img
        src={
          item.media.includes("https")
            ? item.media
            : `http://localhost:3000/uploads/${item.media}`
        }
        alt=""
      />
      <Link to={`/pin/${item._id}`} className="overlay"></Link>
      <button className="save-button" onClick={onSave}>
        {" "}
        {isSaved ? "-Unsave" : "+Save"}
      </button>
      <div className="gallery-functions">
        <button className="func" onClick={onLike}>
          {isLiked ? (
            <img src="/general/like.png" alt="" />
          ) : (
            <img src="/general/dislike.png" alt="" />
          )}
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
