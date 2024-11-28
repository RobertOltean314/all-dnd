import React from "react";

export default function DungeonMaster({ setCurrentView }) {
  return (
    <div className="dm-section">
      <li className="sidebar-item">
        Dungeon Master
      </li>
      <ul className="subsection">
        <li onClick={() => setCurrentView("encounters")}>Encounters</li>
        <li onClick={() => setCurrentView("calendar")}>Calendar</li>
        <li onClick={() => setCurrentView("map")}>Map</li>
        <li onClick={() => setCurrentView("quests")}>Quests</li>
      </ul>
    </div>
  );
}
