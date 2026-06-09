import React from "react";
import { useEffect, useState } from "react";

export default function Announcement() {
  const announcement = {
    title: "XP Bonus Active!",
    text: "Earn Double XP for the next 24 hours",
  };

  return (
    <div className="w-full pl-4 pr-20 py-6 border-2 border-gray-400 rounded-md flex flex-col gap-6">
      <div>
        <h1 className="text-text-main text-2xl font-uncialantiqua">
          {announcement.title}
        </h1>
        <p className="text-text-secondary text-sm font-poppinssemibold">
          {announcement.text}
        </p>
      </div>
      <div>
        <button className="text-yellow-400 font-poppinsbold text-base tracking-wide underline cursor-pointer">
          Learn More!
        </button>
      </div>
    </div>
  );
}
