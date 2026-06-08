import React from "react";
import { FaVolumeUp, FaMusic, FaLanguage } from "react-icons/fa";

export default function SettingsCard({ settings, updateSetting }) {
  const ToggleSwitch = ({ active, onClick }) => (
    <div
      onClick={onClick}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${active ? "bg-green-500" : "bg-gray-400"}`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${active ? "translate-x-7" : "translate-x-0"}`}
      ></div>
    </div>
  );

  return (
    <div className="p-6 rounded-md border-2 border-gray-400 shadow-xl bg-[#16213e] text-white">
      <h2 className="text-xl font-uncialantiqua font-bold mb-6 flex items-center gap-2 border-b pb-2 border-gray-500/30">
        Settings & Preferences
      </h2>

      <div className="space-y-6">
        {/* Sound Switch */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaVolumeUp className="text-purple-400" size={20} />
            <span className="font-medium text-lg">Sound Effects</span>
          </div>
          <ToggleSwitch
            active={settings.sound}
            onClick={() => updateSetting("sound", !settings.sound)}
          />
        </div>

        {/* Music Switch */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaMusic className="text-pink-400" size={20} />
            <span className="font-medium text-lg">Background Music</span>
          </div>
          <ToggleSwitch
            active={settings.music}
            onClick={() => updateSetting("music", !settings.music)}
          />
        </div>

        {/* Language Selector */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaLanguage className="text-green-400" size={24} />
            <span className="font-medium text-lg">Language</span>
          </div>
          <select
            value={settings.language}
            onChange={(e) => updateSetting("language", e.target.value)}
            className="p-2 rounded-lg outline-hidden font-medium cursor-pointer bg-[#0f172a] border border-gray-600 text-white"
          >
            <option value="en">English</option>
            <option value="id">Indonesian</option>
            <option value="es">Spanish</option>
            <option value="jp">Japanese</option>
          </select>
        </div>
      </div>
    </div>
  );
}
