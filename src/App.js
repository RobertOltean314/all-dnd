import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import DungeonMasterPage from "./components/pages/dungeonMaster/DungeonMasterPage";
import PlayerPage from "./components/pages/player/PlayerPage";
import CampaignPage from "./components/pages/dungeonMaster/CampaignPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/dungeon-master-page",
    element: <DungeonMasterPage />,
    children: [
      {
        path: "campaign/test-campaign",
        element: <CampaignPage />,
      },
    ],
  },
  {
    path: "/player-page",
    element: <PlayerPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
