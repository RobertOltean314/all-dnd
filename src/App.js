import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Additional routes will be added here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
