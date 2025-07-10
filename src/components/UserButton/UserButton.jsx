import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import "./UserButton.css";
import { logoutRtk } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../utils/fetchPins";

const UserButton = () => {
  const dispatch = useDispatch();
  const currUser = true;
  const user = useSelector((state) => state.user.user);
  const [logout] = useLogoutMutation();
  const [show, setShow] = useState(false);
  const handleLogout = async () => {
    try {
      setShow(false);

      const res = await logout();
      dispatch(logoutRtk(res));
    } catch (error) {}
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        show &&
        !e.target.closest(".user-button") // ".user-button" dışına tıklanınca
      ) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);
  return user?.username ? (
    <div className="user-button">
      <Link
        to={`/${user.username}`}
        className="user-option"
        onClick={() => setShow(false)}
      >
        <img
          src={
            user.img.includes("https")
              ? user.img
              : `http://localhost:3000${user.img}`
          }
          alt=""
        />
      </Link>
      <img
        onClick={() => setShow((prev) => !prev)}
        src="/general/arrow.svg"
        alt=""
        className="arrow"
      />
      {show && (
        <div className="user-options">
          <Link
            to={`/${user.username}`}
            onClick={() => setShow(false)}
            className="user-option"
          >
            Profile
          </Link>
          <Link className="user-option" onClick={() => setShow(false)}>
            Settings
          </Link>
          <div onClick={handleLogout} className="user-option">
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="logo-link">
      Login / Signup
    </Link>
  );
};

export default UserButton;
