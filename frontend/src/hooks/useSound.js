import { useEffect, useRef } from "react";

export default function useSound(src, volume = 1) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.load();
    audioRef.current = audio;
  }, [src]);

  const playSelected = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return { playSelected };
}
