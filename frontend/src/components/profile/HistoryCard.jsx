import React from "react";
import { FaGamepad, FaListUl, FaHistory } from "react-icons/fa";

export default function HistoryCard({ stats }) {
  return (
    <div className="p-6 border-2 border-gray-400 rounded-md shadow-xl flex flex-col h-full bg-[#16213e] text-white">
      <h2 className="text-xl font-uncialantiqua font-bold mb-6 flex items-center gap-2 border-b pb-2 border-gray-500/30">
        Activity & History
      </h2>

      <div className="space-y-6 flex-1">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#0f172a] text-blue-400">
            <FaGamepad size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-400">Last Played Mode</p>
            <p className="font-semibold text-lg">{stats.lastPlayedMode}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#0f172a] text-purple-400">
            <FaListUl size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-400">Last Selected Category</p>
            <p className="font-semibold text-lg">{stats.lastSelectedCategory}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <FaHistory className="text-gray-400" /> 
            Recent Matches
          </h3>
          {stats.recentMatches.length === 0 ? (
            <p className="text-sm italic text-gray-500">
              No matches played yet. Go crack some code!
            </p>
          ) : (
            <ul className="space-y-2">
              {stats.recentMatches.map((match, idx) => (
                <li key={idx} className="p-3 rounded-lg text-sm flex justify-between bg-[#0f172a]">
                  <span className="font-medium">{match.opponent}</span>
                  <span className={match.result === "Win" ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                    {match.result}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
