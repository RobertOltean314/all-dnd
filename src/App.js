import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import DungeonMasterPage from "./components/DungeonMasterPage";
import CreateCampaign from "./components/CreateCampaign";
import PlayerPage from "./components/PlayerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/dungeon-master-page",
    element: <DungeonMasterPage />,
    children: [{ path: "create-new-campaign", element: <CreateCampaign /> }],
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
