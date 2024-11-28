import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./components/pages/HomePage";
import DungeonMasterEncounters from "./components/pages/encounters/DungeonMasterEncounters";

// DM Pages
const DungeonMasterSessions = () => <div>DM Sessions Page</div>;
const DungeonMasterMap = () => <div>DM Map Page</div>;
const DungeonMasterCalendar = () => <div>DM Calendar Page</div>;
const DungeonMasterQuests = () => <div>DM Quests Page</div>;
const DungeonMasterNotes = () => <div>DM Notes Page</div>;

// Player Page
const PlayerPage = () => <div>Player Page</div>;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dm/sessions" element={<DungeonMasterSessions />} />
            <Route
              path="/dm/encounters"
              element={<DungeonMasterEncounters />}
            />
            <Route path="/dm/map" element={<DungeonMasterMap />} />
            <Route path="/dm/calendar" element={<DungeonMasterCalendar />} />
            <Route path="/dm/quests" element={<DungeonMasterQuests />} />
            <Route path="/dm/notes" element={<DungeonMasterNotes />} />
            <Route path="/player" element={<PlayerPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
