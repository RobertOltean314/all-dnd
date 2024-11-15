import React, { useState } from "react";
import { Link } from "react-router-dom";
import Campaign from "./Campaign";
import CreateCampaign from "./CreateCampaign";

export default function DungeonMasterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateCampaign = (newCampaign) => {
    setCampaigns([...campaigns, newCampaign]);
    closeModal();
  };

  return (
    <>
      <div id="dungeonMasterPage">
        <h1 id="dungeonMasterPage__header">
          Welcome to All DnD, Dungeon Master
        </h1>
        <Link to="/">
          <button id="homepageButton">Back to Main Menu</button>
        </Link>
      </div>
      <div id="dungeonMasterPage__listOfCampaigns">
        <button id="createNewCampaign__button" onClick={openModal}>
          Create new Campaign
        </button>
        <ul>
          {campaigns.map((campaign, index) => (
            <li key={index}>
              <Campaign name={campaign.name} genres={campaign.genres} />
            </li>
          ))}
        </ul>
        {isModalOpen && (
          <CreateCampaign
            onClose={closeModal}
            onSubmit={handleCreateCampaign}
          />
        )}
      </div>
    </>
  );
}
