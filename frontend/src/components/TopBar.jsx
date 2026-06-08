import { FaGem } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Topbar() {
  const heart = 20;
  const diamond = 100;
  return (
    <div className="fixed top-0 right-0 w-full border-b border-gray-400 sm:w-[calc(100%-13rem)] py-4 px-6 z-50 bg-color-main flex justify-end items-center gap-10">
      <div className="flex justify-center items-center gap-2">
        <FaGem className="text-blue-400 text-2xl" />
        <p className="text-blue-400 font-semibold text-lg">{diamond}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <FaHeart className=" text-red-500 text-2xl" />
        <p className="text-red-500 font-semibold text-lg">{heart}</p>
      </div>
    </div>
  );
}
