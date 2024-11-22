import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import DungeonMasterPage from "./components/DungeonMasterPage";
import PlayerPage from "./components/PlayerPage";
import CampaignPage from "./components/CampaignPage"; // Import the new component

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
        path: "campaign/test-campaign", // Nested route
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
