import React from "react";
import { useNavigate } from "react-router-dom";
import imageSementara from "../assets/images/thumbnail_html.webp";

export default function ContinueLevel() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-transparent border-2 border-gray-400 rounded-md overflow-hidden shadow-lg">
      <img
        src={imageSementara}
        alt="course_image"
        className="w-full h-[250px] object-cover object-center text-white"
      />
      <div className="p-4 space-y-3">
        <p className="text-yellow-400 text-sm font-uncialantiqua">
          Continue your adventure!
        </p>
        <h2 className="text-xl font-bold text-white font-uncialantiqua">
          No Recent
        </h2>
        <p className="text-gray-400 text-sm font-uncialantiqua">
          No Recent Basic : Level 1
        </p>
        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
          <div className="bg-yellow-400 h-full transition-all duration-500" />
        </div>
        <button
          onClick={() => {
            if (!recentActivity) return;
            navigate("/html-level");
          }}
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md font-uncialantiqua cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          Tap to continue
        </button>
      </div>
    </div>
  );
}
