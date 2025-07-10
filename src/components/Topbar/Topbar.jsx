import React from "react";
import "./Topbar.css";
import UserButton from "../UserButton/UserButton";
import { useNavigate } from "react-router";

const Topbar = () => {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  }
  return (
    <form onSubmit={handleSubmit} className="top-bar">
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>

      <UserButton />
    </form>
  );
};

export default Topbar;
