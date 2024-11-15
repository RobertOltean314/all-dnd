import React, { useState } from "react";

export default function CreateCampaign({ onClose, onSubmit }) {
  const [campaignName, setCampaignName] = useState("");
  const [campaignGenres, setCampaignGenres] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCampaign = { name: campaignName, genres: campaignGenres };
    onSubmit(newCampaign);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1>Create New Campaign</h1>
        <form id="campaignForm" onSubmit={handleSubmit}>
          <label htmlFor="campaignName">Campaign Name:</label>
          <input
            type="text"
            id="campaignName"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            required
          />

          <label htmlFor="campaignGenres">Genres:</label>
          <input
            type="text"
            id="campaignGenres"
            value={campaignGenres}
            onChange={(e) => setCampaignGenres(e.target.value)}
            required
            placeholder="e.g: Fantasy, Medieval, Adventure"
          />

          <button type="submit">Create Campaign</button>
        </form>
      </div>
    </div>
  );
}
