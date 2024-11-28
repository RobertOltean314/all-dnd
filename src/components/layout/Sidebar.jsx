import React from "react";
import DungeonMaster from "../pages/DungeonMaster";
import Player from "../pages/Player";

export default function Sidebar({ setCurrentView }) {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li className="logo" onClick={() => setCurrentView("home")}>
          Home
        </li>
        <DungeonMaster setCurrentView={setCurrentView} />
        <Player setCurrentView={setCurrentView} />
      </ul>
    </nav>
  );
}
