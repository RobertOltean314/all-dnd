import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [dmExpanded, setDmExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          All-DnD
        </Link>
      </div>

      <div className="sidebar-content">
        {/* DM Section */}
        <div className="nav-section">
          <button
            className={`nav-item ${dmExpanded ? "expanded" : ""}`}
            onClick={() => setDmExpanded(!dmExpanded)}
          >
            <span>Dungeon Master</span>
            <span className="arrow">{dmExpanded ? "▼" : "▶"}</span>
          </button>

          {dmExpanded && (
            <div className="subnav">
              <Link
                to="/dm/sessions"
                className={`nav-item sub-item ${
                  isActive("/dm/sessions") ? "active" : ""
                }`}
              >
                Sessions
              </Link>
              <Link
                to="/dm/encounters"
                className={`nav-item sub-item ${
                  isActive("/dm/encounters") ? "active" : ""
                }`}
              >
                Encounters
              </Link>
              <Link
                to="/dm/map"
                className={`nav-item sub-item ${
                  isActive("/dm/map") ? "active" : ""
                }`}
              >
                Map
              </Link>
              <Link
                to="/dm/calendar"
                className={`nav-item sub-item ${
                  isActive("/dm/calendar") ? "active" : ""
                }`}
              >
                Calendar
              </Link>
              <Link
                to="/dm/quests"
                className={`nav-item sub-item ${
                  isActive("/dm/quests") ? "active" : ""
                }`}
              >
                Quests
              </Link>
              <Link
                to="/dm/notes"
                className={`nav-item sub-item ${
                  isActive("/dm/notes") ? "active" : ""
                }`}
              >
                Notes
              </Link>
            </div>
          )}
        </div>

        {/* Player Section */}
        <Link
          to="/player"
          className={`nav-item ${isActive("/player") ? "active" : ""}`}
        >
          Player
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
