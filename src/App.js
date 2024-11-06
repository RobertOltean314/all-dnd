import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DungeonMasterPage from "./components/dungeonMasterPage/DungeonMasterPage";
import PlayerPage from "./components/playerPage/PlayerPage"; // Import PlayerPage component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dungeon-master-page" element={<DungeonMasterPage />} />
        <Route path="/player-page" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
