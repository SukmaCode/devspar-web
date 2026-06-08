import React, { useState } from "react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";

export default function QuestCard() {
  //   const { addLife } = useContext(LivesContext); // <── gunakan LivesContext
  //      const [xp, setXp] = useState(420);

  const [dailyQuests, setDailyQuests] = useState([
    {
      id: "d1",
      title: "Selesaikan 2 level HTML",
      reward: "10 XP",
      done: false,
    },
    {
      id: "d2",
      title: "Jawab 5 soal benar tanpa salah",
      reward: "1 ❤",
      done: false,
    },
    {
      id: "d3",
      title: "Main 15 menit latihan",
      reward: "5 XP",
      done: false,
    },
  ]);
  const completeDailyQuest = (id) => {
    setDailyQuests((prev) =>
      prev.map((q) => (q.id === id ? { ...q, done: true } : q)),
    );
  };
  return (
    <div className="bg-slate-900 p-6 rounded-md shadow-lg w-full max-w-xl space-y-4 border-2 border-gray-400">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-yellow-400 text-base font-uncialantiqua">
          Your Daily Quest, Adventure!
        </p>

        <h2 className="text-xl text-white font-uncialantiqua">Daily Quest</h2>

        <p className="text-gray-400 text-base font-uncialantiqua">
          New quest available every day. Complete all for a bonus chest!
        </p>
      </div>

      {/* Quest List */}
      {dailyQuests.map((q) => (
        <button
          key={q.id}
          disabled={q.done}
          onClick={() => completeDailyQuest(q.id)}
          className={`w-full flex items-center gap-3 p-3 rounded-xl transition
      ${
        q.done
          ? "opacity-60 cursor-not-allowed"
          : "hover:bg-slate-800 hover:scale-[1.02] active:scale-95"
      }`}
        >
          {/* Icon */}
          {q.done ? (
            <FiCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <FiCircle className="text-gray-500 text-2xl" />
          )}

          {/* Text */}
          <div className="flex-1 text-left">
            <p
              className={`font-medium font-uncialantiqua ${
                q.done ? "line-through text-gray-500" : "text-white"
              }`}
            >
              {q.title}
            </p>

            <p className="text-sm text-gray-400 font-uncialantiqua">
              {q.reward}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
