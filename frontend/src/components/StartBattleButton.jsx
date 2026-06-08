import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartBattleButton() {
  const navigate = useNavigate();
  function handleStart() {
    navigate;
    ("/battlescreen");
  }
  return (
    <button
      onClick={handleStart}
      className="w-full text-white font-uncialantiqua py-2 border-2 border-gray-400 rounded-md overflow-hidden active:scale-95 transition duration-150
    hover:bg-[rgba(255,255,255)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:text-black"
    >
      Start Battle
    </button>
  );
}
