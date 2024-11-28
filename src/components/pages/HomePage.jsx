import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Card from "../common/Card";
import PageLayout from "../layout/PageLayout";
import { useTheme } from "../../context/ThemeContext";

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <PageLayout>
      <div className="home">
        <div className="home-header flex justify-between items-center mb-8">
          <h1>Welcome to All-DnD</h1>
          <Button onClick={toggleTheme} variant="secondary">
            Toggle Theme
          </Button>
        </div>

        <div className="grid grid-cols-2">
          <Link to="/dungeon-master" className="card-link">
            <Card>
              <h2 className="mb-4">Dungeon Master</h2>
              <p>
                Create and manage your campaigns, NPCs, encounters, and more.
              </p>
            </Card>
          </Link>

          <Link to="/player" className="card-link">
            <Card>
              <h2 className="mb-4">Player</h2>
              <p>
                Manage your characters, track inventory, and join campaigns.
              </p>
            </Card>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
