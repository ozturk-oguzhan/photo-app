import React, { useEffect } from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet, useLocation } from "react-router";
import "./MainLayout.css";
import { useVerifyTokenMutation } from "../../utils/fetchPins";
import { useDispatch, useSelector } from "react-redux";
import { logoutRtk } from "../../utils/userSlice";
import { useLogoutMutation } from "../../utils/fetchPins";

const MainLayout = () => {
  const user = useSelector((state) => state.user.user);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const [verifyToken] = useVerifyTokenMutation();
  const location = useLocation();
  useEffect(() => {
    if (user?._id) {
      verify();
    }
  }, [location]);

  async function verify() {
    try {
      const res = await verifyToken({ userId: user._id }).unwrap();

      if (!res) {
        logout();
        dispatch(logoutRtk());
      }
    } catch (error) {
      logout();
      dispatch(logoutRtk());
      console.log(error.message);
    }
  }
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
