import React, { useState, useEffect } from "react";
import { getAllAvatar } from "../../services/avatar.service";

export default function AvatarPickerModal({ isOpen, onClose, currentAvatarId, onSelectAvatar }) {
  if (!isOpen) return null;

  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await getAllAvatar();
        setAvatars(response || []);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };
    fetchAvatars();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-md p-6 rounded-md shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-300 bg-[#1e1e1e] text-white">
        <h2 className="text-2xl font-uncialantiqua font-bold mb-4 text-center">Choose Your Avatar</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {avatars.map((avatar) => (
            <div 
              key={avatar.id} 
              onClick={() => onSelectAvatar(avatar.id)}
              className={`cursor-pointer rounded-xl overflow-hidden border-4 transition-all duration-200 ${
                currentAvatarId === avatar.id 
                  ? "border-green-400 scale-105"
                  : "border-transparent hover:scale-105 hover:shadow-lg"
              }`}
            >
              <img 
                src={avatar.image_url}
                // alt={`Avatar ${avatar.id}`} 
                className="w-full h-auto bg-[#16213e]"
              />
            </div>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="w-full py-3 rounded-xl font-bold transition-colors bg-gray-700 hover:bg-gray-600 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
