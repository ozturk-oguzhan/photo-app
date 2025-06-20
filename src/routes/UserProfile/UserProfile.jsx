import React, { useState } from "react";
import "./UserProfile.css";
import Gallery from "../../components/Gallery/Gallery";
const UserProfile = () => {
  const [active, setActive] = useState("created");
  function setClass(activeClass) {
    setActive(activeClass);
  }
  return (
    <div className="user-profile">
      <div className="user-info">
        <img className="user-img" src="/general/noAvatar.png" alt="" />
        <h2>John Doe</h2>
        <span>@johndoe</span>
        <span>10 Follower - 2- Following</span>
        <div className="profile-func">
          <img src="/general/share.svg" alt="" />
          <button className="message">Message</button>
          <button className="follow">Follow</button>
          <img src="/general/more.svg" alt="" />
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-options">
          <span
            onClick={() => setClass("created")}
            className={active === "created" ? "active" : ""}
          >
            Created
          </span>
          <span
            onClick={() => setClass("saved")}
            className={active === "saved" ? "active" : ""}
          >
            Saved
          </span>
        </div>
        {active === "created" ? <Gallery /> : "asdasd"}
      </div>
    </div>
  );
};

export default UserProfile;
