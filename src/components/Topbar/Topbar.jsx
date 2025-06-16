import React from "react";
import "./Topbar.css";
import UserButton from "../UserButton/UserButton";
const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />
    </div>
  );
};

export default Topbar;
