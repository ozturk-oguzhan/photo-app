import React from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet } from "react-router";
import "./MainLayout.css";
const MainLayout = () => {
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
