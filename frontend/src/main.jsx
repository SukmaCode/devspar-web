import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { SettingsProvider } from "./contexts/SettingsContext";
import { StatsProvider } from "./contexts/StatsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SettingsProvider>
      <StatsProvider>
        <App />
      </StatsProvider>
    </SettingsProvider>
  </StrictMode>
);