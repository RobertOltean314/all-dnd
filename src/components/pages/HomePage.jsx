import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to All-DnD</h1>
      <p className="intro-text">
        Choose your role to get started with your D&D adventure
      </p>

      <div className="cards-container">
        <Link to="/dm/sessions" className="card-link">
          <h2>Dungeon Master</h2>
          <p>Create and manage your campaigns, NPCs, encounters, and more.</p>
        </Link>

        <Link to="/player" className="card-link">
          <h2>Player</h2>
          <p>Manage your characters, track inventory, and join campaigns.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
