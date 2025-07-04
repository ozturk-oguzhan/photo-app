import React from "react";
import "./SavedItems.css";
const SavedItems = ({ boardsData }) => {
  return (
    <div className="saved">
      {boardsData &&
        boardsData.map((board) => (
          <div className="collection" key={board._id}>
            <img src="/pins/pin1.jpeg" alt="" />
            <div className="collection-info">
              <h4>{board.title}</h4>
              <span>12 pins - 1w</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SavedItems;
