import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

export default function ProfileHeader({ stats, updateStats, onOpenAvatarPicker }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(stats.username);

  const handleSaveName = () => {
    if (editName.trim()) {
      updateStats({ username: editName.trim() });
    }
    setIsEditing(false);
  };

  const getRank = (level) => {
    if (level < 5) return "Novice Coder";
    if (level < 15) return "Script Kiddy";
    if (level < 30) return "Code Ninja";
    if (level < 50) return "Master Hacker";
    return "Cyber Overlord";
  };

  const xpRequired = stats.level * 1000;
  const xpPercent = Math.min((stats.xp / xpRequired) * 100, 100);

  return (
    <div className="border-2 border-gray-400 p-6 rounded-md shadow-xl flex flex-col md:flex-row items-center gap-6 bg-color-main">
      {/* Avatar Section */}
      <div className="relative group cursor-pointer" onClick={onOpenAvatarPicker}>
        <div className="w-28 h-28 rounded-full border-4 border-[#4ade80] overflow-hidden shadow-lg transform transition group-hover:scale-105">
          <img
            src={`https://api.dicebear.com/7.x/bottts/svg?seed=${stats.avatarId}&backgroundColor=16213e`}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white shadow-md">
          <FaPen size={12} />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 w-full text-center md:text-left space-y-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="px-3 py-1 rounded-md outline-hidden border bg-[#0f172a] border-gray-600 text-white"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
              />
              <button onClick={handleSaveName} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">Save</button>
            </div>
          ) : (
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <h1 className="text-3xl text-white font-bold tracking-wide font-uncialantiqua">{stats.username}</h1>
              <button onClick={() => setIsEditing(true)} className="text-gray-400 hover:text-blue-500 transition">
                <FaPen size={16} />
              </button>
            </div>
          )}
        </div>
        
        <p className="text-lg font-uncialantiqua font-medium text-[#4ade80]">
          Level {stats.level} • {getRank(stats.level)}
        </p>

        {/* XP Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1 font-semibold">
            <span className="text-white font-uncialantiqua">XP Progress</span>
            <span className="text-white font-uncialantiqua">{stats.xp} / {xpRequired}</span>
          </div>
          <div className="w-full h-3 rounded-full overflow-hidden bg-gray-700">
            <div
              className="h-full transition-all duration-1000 ease-out rounded-full bg-linear-to-r from-green-400 to-blue-500"
              style={{ width: `${xpPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
