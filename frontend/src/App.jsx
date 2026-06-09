import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import MainMenuPage from "./pages/MainMenuPage";
import SettingsPage from "./pages/SettingsPage";
import CreditPage from "./pages/CreditPage";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import Profile from "./pages/Profile";
import Course from "./pages/Course";
import LevelPage from "./pages/learnpages/LevelPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Menu */}
        <Route path="/" element={<MainMenuPage />} />
        <Route path="/settingpage" element={<SettingsPage />} />
        <Route path="/creditpage" element={<CreditPage />} />

        {/* Sidebar */}
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/profile" element={<Profile />} />
        
        {/*  */}
        <Route path="/level/:courseId" element={<LevelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
