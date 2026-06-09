import React from 'react'
import { NavLink } from "react-router-dom";
import useSound from "../hooks/useSound";
import SoundSelected from "../assets/sounds/selected-sound.mp3";
import LogoutButton from "./LogoutButton";
import { FaHome, FaBook, FaKhanda, FaUser, FaCalculator } from "react-icons/fa";

export default function TabBar() {
    const { playSelected } = useSound(SoundSelected, 1);
      const navLinks = [
        {name: "HOME", path: "/home", 
          icon: <FaHome />}, 
        {name: "COURSE", path: "/course",
          icon: <FaBook />},
        {name: "BATTLE", path: "/battle",
          icon: <FaKhanda />},
        {name: "PROFILE", path: "/profile",
          icon: <FaUser />},
      ]
  return (
    <div className='w-full absolute bottom-4 z-10 sm:hidden flex justify-center items-center'>
      <div className="floating-animation bg-main px-2 border border-white shadow-[0_0_10px_rgba(255,255,255,0.7)] rounded-md flex justify-center items-center">
        <ul className="flex flex-row space-x-6 ">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={playSelected}
              className={({ isActive }) =>
                `font-uncialantiqua p-2 rounded-sm transition flex flex-col items-center gap-1
        ${
          isActive
            ? "text-text-secondary"
            : "text-white hover:bg-gray-600"
        }`
            }
          >
            <div className="text-lg">{link.icon}</div>
            <span className="text-xs">{link.name}</span>
          </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}
