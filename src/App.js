import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css";
import TextScreen from "./screens/TextScreen";
import DownloadableContentScreen from "./screens/DownloadableContentScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="header-container" r>
              <h1>🎄 Merry Christmas! 🎅</h1>
              <div>
                <Link to="/downloadable-content">
                  <button style={{ margin: "10px" }}>🎁 Go to Path 1 🎁</button>
                </Link>
                <Link to="/text">
                  <button style={{ margin: "10px" }}>🎁 Go to Path 2 🎁</button>
                </Link>
              </div>
            </div>
          }
        />

        <Route path="/text" element={<TextScreen />} />

        <Route
          path="/downloadable-content"
          element={<DownloadableContentScreen />}
        />
      </Routes>
    </div>
  );
}

export default App;
