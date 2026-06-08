import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useSound from "../hooks/useSound";
import SoundSelected from "../assets/sounds/selected-sound.mp3";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  const { playSelected } = useSound(SoundSelected, 1);

  return (
    <div className="hidden bg-transparent w-52 h-full flex-col border-r border-gray-400 sm:flex">
      <div className="w-full py-6 px-10 flex flex-row justify-center items-center">
        <h1 className=" font-uncialantiqua text-white text-4xl">DevSpar</h1>
      </div>
      <ul className="w-full h-screen py-6 flex flex-col">
        <NavLink
          to="/home"
          onClick={playSelected}
          className={({ isActive }) =>
            `font-uncialantiqua py-2 px-4 mx-4 my-2 rounded-sm transition
       ${
         isActive
           ? "shadow-[0_0_20px_rgba(255,255,255,0.7)] bg-[rgba(255,255,255)] text-black"
           : "text-white hover:bg-gray-600"
       }`
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/course"
          onClick={playSelected}
          className={({ isActive }) =>
            `font-uncialantiqua py-2 px-4 mx-4 my-2 rounded-sm transition
       ${
         isActive
           ? "shadow-[0_0_20px_rgba(255,255,255,0.7)] bg-[rgba(255,255,255)] text-black"
           : "text-white hover:bg-gray-600"
       }`
          }
        >
          COURSE
        </NavLink>

        <NavLink
          to="/battle"
          onClick={playSelected}
          className={({ isActive }) =>
            `font-uncialantiqua py-2 px-4 mx-4 my-2 rounded-sm transition
       ${
         isActive
           ? "shadow-[0_0_20px_rgba(255,255,255,0.7)] bg-[rgba(255,255,255)] text-black"
           : "text-white hover:bg-gray-600"
       }`
          }
        >
          BATTLE
        </NavLink>

        <NavLink
          to="/profile"
          onClick={playSelected}
          className={({ isActive }) =>
            `font-uncialantiqua py-2 px-4 mx-4 my-2 rounded-sm transition
       ${
         isActive
           ? "shadow-[0_0_20px_rgba(255,255,255,0.7)] bg-[rgba(255,255,255)] text-black"
           : "text-white hover:bg-gray-600"
       }`
          }
        >
          PROFILE
        </NavLink>
      </ul>
      <LogoutButton />
    </div>
  );
}
