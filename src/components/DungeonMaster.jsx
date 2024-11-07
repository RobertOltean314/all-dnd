import { Link, Outlet, useLocation } from "react-router-dom";
import CampaignComponentList from "./CampaignComponentList";

function DungeonMaster() {
  const location = useLocation();
  const isCreateNewCampaignRoute = location.pathname.includes(
    "create-new-campaign"
  );

  return (
    <div id="homepage__container">
      {!isCreateNewCampaignRoute && (
        <>
          <h1 id="homepage__label">Welcome to All Dnd, Dungeon Master</h1>
          <Link to="create-new-campaign">
            <button id="createNewCampaign__button">Create new Campaign</button>
          </Link>
          <CampaignComponentList />
        </>
      )}
      <Outlet />
    </div>
  );
}

export default DungeonMaster;
