import React from "react";
import PlayButton from "../components/PlayButton";
import SettingButton from "../components/SettingButton";
import CreditButton from "../components/CreditButton";
import Topbar from "../components/TopBar";

export default function MainMenuPage() {
  return (
    <div className="bg-linear-to-br from-[#1e1e1e] to-[#000f2d] w-full relative h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="font-uncialantiqua text-4xl md:text-6xl text-center text-white">
        DevSpar
      </h1>
      <div className="flex flex-col gap-4">
        <PlayButton />
        <SettingButton />
        <CreditButton />
      </div>
      {/* <LineAnimation /> */}
    </div>
  );
}
