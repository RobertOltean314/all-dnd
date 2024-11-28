import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import ErrorBoundary from "../components/common/ErrorBoundary";

// Lazy load components for better performance
const Homepage = lazy(() => import("../components/pages/Homepage"));
const DungeonMasterPage = lazy(() =>
  import("../components/pages/dungeonMaster/DungeonMasterPage")
);
const PlayerPage = lazy(() => import("../components/pages/player/PlayerPage"));
const CampaignPage = lazy(() =>
  import("../components/pages/dungeonMaster/CampaignPage")
);

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "dungeon-master",
        element: <DungeonMasterPage />,
        children: [
          {
            path: "campaign/:campaignId",
            element: <CampaignPage />,
          },
        ],
      },
      {
        path: "player",
        element: <PlayerPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
