import React from "react";
import { useNavigate } from "react-router-dom";
import useSound from "../hooks/useSound";
import SoundSelected from "../assets/sounds/selected-sound.mp3";

export default function SettingButton() {
  const navigate = useNavigate();
  const { playSelected } = useSound(SoundSelected, 1);

  const handleClick = () => {
    playSelected();
    setTimeout(() => {
      navigate("/creditpage");
    }, 150);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full border font-uncialantiqua border-white text-white rounded-sm px-16 py-2
      hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255)] hover:text-black transition-all"
    >
      Credits
    </button>
  );
}
