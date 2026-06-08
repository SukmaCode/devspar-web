import { useState } from "react";

export default function SelectMode() {
  const [selectedMode, setSelectedMode] = useState("syntax");

  const battleModes = [
    {
      id: "syntax",
      title: "Syntax Clash 1v1",
      description:
        "Complete in real-time coding duels. Test your syntax skills!",
      players: "1,245",
      icon: "⚔️",
      badge: "🎯 Live",
      iconBg: "#3d5a80",
    },
    {
      id: "debug",
      title: "Debug Frenzy",
      description: "Find and fix bugs against the clock. Speed is key!",
      players: "890",
      icon: "🐛",
      badge: "⏱️ Timed",
      iconBg: "#8b4789",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-yellow-400 drop-shadow-[2px_2px_0px_#8b6914]">
        Select Battle Mode
      </h2>

      {/* Horizontal Scroll */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2">
        {battleModes.map((mode) => {
          const isSelected = selectedMode === mode.id;

          return (
            <div
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`relative cursor-pointer 
              bg-[#1a1f3a] border-4 rounded 
              p-4 transition-all duration-200
              ${
                isSelected
                  ? "border-yellow-400 shadow-[0_0_20px_#ffd700]"
                  : "border-[#3d5a80]"
              }`}
            >
              <div className="flex flex-col gap-3">
                {/* Icon */}
                <div
                  className="relative w-20 h-20 flex items-center justify-center border-4 border-black rounded"
                  style={{ backgroundColor: mode.iconBg }}
                >
                  <span className="text-3xl">{mode.icon}</span>
                </div>

                {/* Badge */}
                <div className="self-start bg-[#0a0e27] border-2 border-[#3d5a80] px-3 py-1 text-xs text-[#98c1d9] font-bold rounded">
                  {mode.badge}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white drop-shadow">
                  {mode.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#98c1d9] leading-5">
                  {mode.description}
                </p>

                {/* Footer */}
                <div className="mt-1">
                  <div className="flex items-center gap-2 bg-[#0a0e27] border-2 border-[#3d5a80] px-3 py-1 text-xs text-[#98c1d9] font-bold rounded w-fit">
                    <span>👥</span>
                    <span>Online Players: {mode.players}</span>
                  </div>
                </div>
              </div>

              {/* Selection Corners */}
              {isSelected && (
                <>
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-yellow-400"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-yellow-400"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-yellow-400"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-yellow-400"></div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
