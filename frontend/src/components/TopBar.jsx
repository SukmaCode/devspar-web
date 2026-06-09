import React, { useState, useEffect } from "react";
import { FaGem } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { getAllAvatar } from "../services/avatar.service";

export default function Topbar() {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    const loadAvatar = async () => {
      try {
        const response = await getAllAvatar();
        setAvatar(response?.data || []);
      } catch (error) {
        console.error("Failed to load avatar:", error);
        setAvatar([]);
      }
    };
    loadAvatar();
  }, []);

  const heart = 20;
  const diamond = 100;
  return (
    <div className="fixed top-0 right-0 w-full border-b border-gray-400 sm:w-[calc(100%-13rem)] py-4 px-6 bg-main flex justify-end items-center gap-10">
      <div className="flex justify-center items-center gap-2">
        <FaGem className="text-blue-400 text-2xl" />
        <p className="text-blue-400 font-semibold text-lg">{diamond}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <FaHeart className=" text-red-500 text-2xl" />
        <p className="text-red-500 font-semibold text-lg">{heart}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="bg-white w-10 h-10 rounded-full overflow-hidden">
          <img src={avatar.image} alt="" />
        </div>
      </div>
    </div>
  );
}
