import React from "react";
import "./GalleryItem.css";
import { Link } from "react-router";
const GalleryItem = ({ item }) => {
  return (
    <div
      className="gallery-item"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img src={item.media} alt="" />
      <Link to={`/pin/${item.id}`} className="overlay"></Link>
      <button className="save-button">Save</button>
      <div className="gallery-functions">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
