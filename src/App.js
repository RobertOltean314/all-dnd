import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DungeonMaster from "./components/DungeonMaster";
import CreateNewCampaign from "./components/CreateNewCampaign";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dungeon-master-page" element={<DungeonMaster />}>
          <Route path="create-new-campaign" element={<CreateNewCampaign />} />
        </Route>
        <Route path="/player-page" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
