import React, { useState } from "react";
import { Link } from "react-router-dom";
import EncountersSection from "./sections/EncountersSection";
import MapSection from "./sections/MapSection";
import CalendarSection from "./sections/CalendarSection";

function CampaignPage() {
  const [selectedSection, setSelectedSection] = useState("encounters");

  const renderSection = () => {
    switch (selectedSection) {
      case "encounters":
        return <EncountersSection />;
      case "map":
        return <MapSection />;
      case "calendar":
        return <CalendarSection />;
      default:
        return <EncountersSection />;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dungeon-master-page">Dungeon Master Page</Link>
          </li>
          <li>
            <button onClick={() => setSelectedSection("encounters")}>
              Encounters
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedSection("map")}>Map</button>
          </li>
          <li>
            <button onClick={() => setSelectedSection("calendar")}>
              Calendar
            </button>
          </li>
        </ul>
      </nav>
      <div>{renderSection()}</div>
    </div>
  );
}

export default CampaignPage;
