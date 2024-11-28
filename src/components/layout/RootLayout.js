import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import LoadingSpinner from "../common/LoadingSpinner";

const RootLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default RootLayout;
