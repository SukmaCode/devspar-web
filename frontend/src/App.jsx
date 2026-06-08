import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenuPage from "./pages/MainMenuPage";
import SettingsPage from "./pages/SettingsPage";
import CreditPage from "./pages/CreditPage";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import Profile from "./pages/Profile";
import Course from "./pages/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenuPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settingpage" element={<SettingsPage />} />
        <Route path="/creditpage" element={<CreditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
