import React, { useState } from "react";
import "./UserButton.css";
const UserButton = () => {
  const currUser = true;
  const [show, setShow] = useState(false);
  return currUser ? (
    <div className="user-button">
      <img src="/general/noAvatar.png" alt="" />
      <img
        onClick={() => setShow((prev) => !prev)}
        src="/general/arrow.svg"
        alt=""
        className="arrow"
      />
      {show && (
        <div className="user-options">
          <div className="user-option">Profile</div>
          <div className="user-option">Settings</div>
          <div className="user-option">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="logo-link">
      Login / Signup
    </a>
  );
};

export default UserButton;
