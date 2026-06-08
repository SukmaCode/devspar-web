import React from "react";
import { NavLink } from "react-router-dom";

export default function LogoutButton() {
  return (
    <NavLink
      className="py-2 px-4 mx-4 my-2 font-uncialantiqua text-white border-2 border-gray-400 rounded-sm
        hover:bg-[rgba(255,255,255)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:text-black transition"
      to="/"
    >
      LOGOUT
    </NavLink>
  );
}
