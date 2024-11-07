import React from "react";

function CampaignComponent({ campaign }) {
  if (!campaign) {
    return null; // or return some placeholder UI
  }

  return (
    <div id="campaignCard">
      <h2>{campaign.name}</h2>
      <p>{campaign.genres}</p>
    </div>
  );
}

export default CampaignComponent;
