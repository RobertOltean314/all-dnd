import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream:src/components/CampaignPage.jsx
import EncountersSection from "./sections/EncountersSection";
import MapSection from "./sections/MapSection";
import CalendarSection from "./sections/CalendarSection";
=======
import EncountersSection from "../../sections/EncountersSection";
import MapSection from "../../sections/MapSection";
import CalendarSection from "../../sections/CalendarSection";
import NPCsSection from "../../sections/NPCsSection.jsx";
import QuestsSection from "../../sections/QuestsSection";
import PlayerCharactersSection from "../../sections/PlayerCharactersSection";
>>>>>>> Stashed changes:src/components/pages/dungeonMaster/CampaignPage.jsx

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
      case "npcs":
        return <NPCsSection />;
      case "quests":
        return <QuestsSection />;
      case "playerCharacters":
        return <PlayerCharactersSection />;
      default:
        return <EncountersSection />;
    }
  };

  return (
    <div className="campaign-page">
      <nav className="campaign-page__nav">
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
          <li>
            <button onClick={() => setSelectedSection("npcs")}>NPCs</button>
          </li>
          <li>
            <button onClick={() => setSelectedSection("quests")}>Quests</button>
          </li>
          <li>
            <button onClick={() => setSelectedSection("playerCharacters")}>
              Player Characters
            </button>
          </li>
        </ul>
      </nav>
      <div className="campaign-page__content">{renderSection()}</div>
    </div>
  );
}

export default CampaignPage;
