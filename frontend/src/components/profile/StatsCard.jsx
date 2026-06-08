import React from "react";
import { FaTrophy, FaSkull, FaClock, FaChartPie, FaCalendarAlt } from "react-icons/fa";

export default function StatsCard({ stats, onReset }) {
  const winRate = stats.totalWins + stats.totalFails === 0 
    ? 0 
    : ((stats.totalWins / (stats.totalWins + stats.totalFails)) * 100).toFixed(1);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  const StatItem = ({ icon: Icon, color, label, value }) => (
    <div className="p-4 rounded-xl flex items-center gap-4 bg-[#0f172a]">
      <div className={`p-3 rounded-lg ${color} bg-opacity-20`}>
        <Icon className={color.replace('bg-', 'text-')} size={24} />
      </div>
      <div>
        <p className="text-sm font-uncialantiqua text-gray-400">{label}</p>
        <p className="text-xl font-uncialantiqua font-bold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 border-2 border-gray-400 rounded-md shadow-xl bg-[#16213e] text-white">
      <div className="flex justify-between items-center mb-6 border-b pb-2 border-gray-500/30">
        <h2 className="text-xl font-uncialantiqua font-bold flex items-center gap-2">
          Game Statistics
        </h2>
        <button 
          onClick={onReset}
          className="text-xs font-uncialantiqua px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
        >
          Reset Stats
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatItem 
          icon={FaTrophy} 
          color="bg-yellow-500" 
          label="Total Wins" 
          value={stats.totalWins} 
        />
        <StatItem 
          icon={FaSkull} 
          color="bg-red-500" 
          label="Total Fails" 
          value={stats.totalFails} 
        />
        <StatItem 
          icon={FaChartPie} 
          color="bg-blue-500" 
          label="Win Rate" 
          value={`${winRate}%`} 
        />
        <StatItem 
          icon={FaClock} 
          color="bg-purple-500" 
          label="Play Time" 
          value={`${stats.totalPlayTimeMinutes} mins`} 
        />
      </div>

      <div className="mt-6 pt-4 flex items-center gap-2 text-sm border-t border-gray-700 text-gray-400">
        <FaCalendarAlt />
        <span className="font-uncialantiqua">Last Login: {formatDate(stats.lastLogin)}</span>
      </div>
    </div>
  );
}
