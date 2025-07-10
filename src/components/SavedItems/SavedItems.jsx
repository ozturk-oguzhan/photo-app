import React, { useEffect, useState } from "react";
import "./SavedItems.css";
import { useLazyGetAllSavedPinQuery } from "../../utils/fetchPins";
import GalleryItem from "../GalleryItem/GalleryItem";
const SavedItems = () => {
  const [getAllSaved] = useLazyGetAllSavedPinQuery();
  const [savedPins, setSavedPins] = useState([]);
  async function getAllSavedPin(params) {
    const res = await getAllSaved().unwrap();
    setSavedPins(res);
  }
  useEffect(() => {
    getAllSavedPin();
  }, [savedPins]);
  return (
    <div className="gallery">
      {savedPins &&
        savedPins.map((savedPin) => (
          <GalleryItem key={savedPin.post._id} item={savedPin.post} />
        ))}
    </div>
  );
};

export default SavedItems;
