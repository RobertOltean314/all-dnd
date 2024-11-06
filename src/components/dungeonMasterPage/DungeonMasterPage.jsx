import { Link } from "react-router-dom";
import CampaignList from "./campaign/CampaignComponentList";

function DungeonMasterPage() {
  return (
    <div id="homepage__container">
      <h1 id="homepage__label">Welcome to All Dnd, Dungeon Master</h1>
      <Link to="/create-new-campaign">
        <button id="createNewCampaign__button">Create new Campaign</button>
      </Link>
      <CampaignList />
    </div>
  );
}

export default DungeonMasterPage;
