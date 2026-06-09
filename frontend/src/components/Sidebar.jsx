import { NavLink } from "react-router-dom";
import useSound from "../hooks/useSound";
import SoundSelected from "../assets/sounds/selected-sound.mp3";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  const { playSelected } = useSound(SoundSelected, 1);
  const navLinks = [
    {name: "HOME", path: "/home"}, 
    {name: "COURSE", path: "/course"},
    {name: "BATTLE", path: "/battle"},
    {name: "PROFILE", path: "/profile"},
  ]

  return (
    <div className="hidden bg-main w-52 h-full flex-col border-r border-gray-400 sm:flex">
      <div className="w-full py-6 px-10 flex flex-row justify-center items-center">
        <h1 className=" font-uncialantiqua text-white text-4xl">DevSpar</h1>
      </div>
      <ul className="w-full h-screen py-6 flex flex-col">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={playSelected}
            className={({ isActive }) =>
              `font-uncialantiqua py-2 px-4 mx-4 my-2 rounded-sm transition
       ${
         isActive
           ? "border-2 rounded-lg border-[rgba(255,255,255)] bg-white/20 text-white"
           : "text-white hover:bg-gray-600"
       }`
          }
        >
          {link.name}
        </NavLink>
        ))}
      </ul>
      <LogoutButton />
    </div>
  );
}
