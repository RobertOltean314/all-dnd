import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Encounters from "./components/encounters/Encounters";
import Calendar from "./components/pages/Calendar";
import Map from "./components/pages/Map";
import Quests from "./components/pages/Quests";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const renderContent = () => {
    switch (currentView) {
      case "encounters":
        return <Encounters />;
      case "calendar":
        return <Calendar />;
      case "map":
        return <Map />;
      case "quests":
        return <Quests />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setCurrentView={setCurrentView} />
      <section className="main-content">{renderContent()}</section>
    </div>
  );
}

export default App;
