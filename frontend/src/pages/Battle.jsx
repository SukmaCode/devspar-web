import React from "react";
import Sidebar from "../components/Sidebar";
import SelectMode from "../components/SelectMode";
import StartBattleButton from "../components/StartBattleButton";

export default function Practice() {
  return (
    <div className="w-full h-screen bg-linear-to-br from-[#1e1e1e] to-[#000f2d] flex flex-row">
      <Sidebar />
      <div className="w-full p-6 flex flex-col justify-between overflow-y-auto">
        <SelectMode />
        <div className="">
          <StartBattleButton />
        </div>
      </div>
    </div>
  );
}
