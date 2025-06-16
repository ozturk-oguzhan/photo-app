import { useState } from "react";
import "./App.css";
import LeftBar from "./components/LeftBar/LeftBar";
import Topbar from "./components/Topbar/Topbar";
import Galellry from "./components/Galellry/Galellry";

function App() {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <Topbar />
        <Galellry />
      </div>
    </div>
  );
}

export default App;
