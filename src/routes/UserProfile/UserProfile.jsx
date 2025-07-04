import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import Gallery from "../../components/Gallery/Gallery";
import SavedItems from "../../components/SavedItems/SavedItems";
import { useParams } from "react-router";
import {
  useLazyGetUserQuery,
  useLazyGetBoardsQuery,
} from "../../utils/fetchPins";
const UserProfile = () => {
  const [active, setActive] = useState("created");
  const { username } = useParams();
  const [user, setUser] = useState();
  const [boards, setBoards] = useState();

  const [fetchUser, { isFetching, isSuccess }] = useLazyGetUserQuery();
  const [fetchBoards] = useLazyGetBoardsQuery();

  console.log(username);
  function setClass(activeClass) {
    setActive(activeClass);
  }
  useEffect(() => {
    setUser([]);
    if (isFetching) return;
    const getUserData = async () => {
      const res = await fetchUser({ username }).unwrap();
      console.log(res);
      setUser(res);
      const boardsData = await fetchBoards({ userId: res._id }).unwrap();
      setBoards(boardsData);
      console.log(boardsData);
    };
    getUserData();
  }, []);
  if (isFetching) return;
  else {
    return (
      <div className="user-profile">
        <div className="user-info">
          <img
            className="user-img"
            src={user?.img || "/general/noAvatar.png"}
            alt=""
          />
          <h2>{user?.displayName}</h2>
          <span>{user?.username}</span>
          <span>10 Follower - 2- Following</span>
          <div className="profile-func">
            <img src="/general/share.svg" alt="" />
            <button className="message">Message</button>
            <button className="follow">Follow</button>
            <img src={"/general/more.svg"} alt="" />
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
          {user?._id &&
            (active === "created" ? (
              <Gallery userId={user._id} />
            ) : (
              <SavedItems boardsData={boards} />
            ))}
        </div>
      </div>
    );
  }
};

export default UserProfile;
