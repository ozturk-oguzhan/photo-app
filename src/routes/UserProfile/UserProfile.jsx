import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import Gallery from "../../components/Gallery/Gallery";
import SavedItems from "../../components/SavedItems/SavedItems";
import { useParams } from "react-router";
import {
  useLazyGetUserQuery,
  useUpdateUserMutation,
  useLazyIsFollowingQuery,
  useFollowUserMutation,
  useLazyFollowInfoQuery,
} from "../../utils/fetchPins";
import { useSelector, useDispatch } from "react-redux";

import { loginRtk } from "../../utils/userSlice";

const UserProfile = () => {
  const [active, setActive] = useState("created");
  const { username } = useParams();
  const [user, setUser] = useState();
  const userRTK = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [fetchUser, { isFetching, isSuccess }] = useLazyGetUserQuery();
  const [updateUser] = useUpdateUserMutation();
  const [followUser] = useFollowUserMutation();
  const [fetchIsFollowingUser] = useLazyIsFollowingQuery();
  const [fetchFollowInfo] = useLazyFollowInfoQuery();
  const [followInfo, setFollowInfo] = useState({
    followingCount: 0,
    followerCount: 0,
  });

  const [isFollowing, setIsFollowing] = useState(false);
  const [file, setFile] = useState();
  function setClass(activeClass) {
    setActive(activeClass);
  }
  async function updateUserSubmit() {
    const formData = new FormData();
    formData.append("photo", file);
    try {
      const res = await updateUser({ id: user._id, formData }).unwrap();
      setUser(res);
      dispatch(loginRtk(res));
    } catch (error) {
      console.log(error.message);
    } finally {
      setFile();
      getUserData();
    }
  }
  const getUserData = async () => {
    const res = await fetchUser({ username }).unwrap();
    setUser(res);
  };
  async function isFollowingFunc() {
    try {
      const isFollowingRes = await fetchIsFollowingUser({
        id: user?._id,
      }).unwrap();
      setIsFollowing(isFollowingRes.message === "Followed");
    } catch (error) {
      console.log(error);
    }
  }

  async function onFollowInfo() {
    const res = await fetchFollowInfo().unwrap();

    setFollowInfo(res);
  }
  async function onFollowuser() {
    const res = await followUser({ id: user?._id }).unwrap();
    setIsFollowing(res.message === "Followed");
  }

  useEffect(() => {
    setUser([]);
    getUserData();
  }, [username]);

  useEffect(() => {
    if (user?._id && userRTK?._id !== user._id) {
      isFollowingFunc();
    }
    onFollowInfo();
  }, [user]);
  if (isFetching) return;
  else {
    return (
      <div className="user-profile">
        <div className="user-info">
          <input
            type="file"
            id="fileInput"
            accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
            style={{ display: "none" }}
            disabled={userRTK?.username !== username}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <label htmlFor="fileInput">
            <img
              className="user-img"
              src={
                file
                  ? URL.createObjectURL(file)
                  : user?.img.includes("https")
                  ? user?.img
                  : `http://localhost:3000${user?.img}`
              }
              alt="profile"
              style={{ cursor: "pointer" }}
            />
            {file && <button onClick={updateUserSubmit}>Update</button>}
          </label>
          <h2>{user?.displayName}</h2>
          <span>{user?.username}</span>
          <span>
            {followInfo?.followerCount} Follower - {followInfo?.followingCount}{" "}
            Following
          </span>
          <div className="profile-func">
            {userRTK?.username !== username && (
              <button className="follow" onClick={onFollowuser}>
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            )}
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
              <SavedItems />
            ))}
        </div>
      </div>
    );
  }
};

export default UserProfile;
