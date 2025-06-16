import React from "react";
import "./LeftBar.css";
const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="menu-icons">
        <a href="/" className="menu-icon">
          <img src="/general/logo.png" alt="" className="logo" />
        </a>
        <a href="/" className="menu-icon">
          <img src="/general/home.svg" alt="" />
        </a>
        <a href="/" className="menu-icon">
          <img src="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menu-icon">
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menu-icon">
          <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menu-icon">
        <img src="/general/messages.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
