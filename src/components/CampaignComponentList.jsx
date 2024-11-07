import React from "react";
import CampaignComponent from "./CampaignComponent";
import { Link } from "react-router-dom";

function CampaignList() {
  const [campaigns, setCampaigns] = React.useState([]);

  return (
    <div id="dungeonMasterPage__listOfCampaigns">
      <Link to="create-new-campaign">
        <button id="createNewCampaign__button">Create new Campaign</button>
      </Link>
      <CampaignComponent />
    </div>
  );
}

export default CampaignList;
