import { Link, Outlet, useLocation } from "react-router-dom";
import CampaignComponentList from "./CampaignComponentList";

function DungeonMaster() {
  const location = useLocation();
  const isCreateNewCampaignRoute = location.pathname.includes(
    "create-new-campaign"
  );

  return (
    <div id="dungeonMasterPage">
      {!isCreateNewCampaignRoute && (
        <>
          <h1 id="dungeonMasterPage__header">
            Welcome to All Dnd, Dungeon Master
          </h1>
          <Link to="/">
            <button id="homepageButton">Back to Main Menu</button>
          </Link>
          <CampaignComponentList />
        </>
      )}
      <Outlet />
    </div>
  );
}

export default DungeonMaster;
