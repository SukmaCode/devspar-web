import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { getLevels } from "../../services/level.service";
import Topbar from "../../components/TopBar";

export default function LevelPage() {
  const { courseId } = useParams();
  const [levels, setLevels] = useState([]);

  const levelStyles = [
    "bg-red-500 border-red-900",
  ];

  const position = [
    "top-2 left-10",
    "top-2 right-10",
    "bottom-2 left-10",
    "bottom-2 right-10",
  ];

  const navigate = useNavigate();
  const openClass = (level) => {
    if (level.is_answer === false) {
      return;
    }
    navigate(`/course/${courseId}/level/${level.id}`);
  };

  useEffect(() => {
    const loadLevels = async () => {
      try {
        const response = await getLevels();
        const allLevels = response?.data || [];
        const filteredLevels = allLevels.filter(
          (level) => String(level.course_id) === String(courseId)
        );
        setLevels(filteredLevels);
      } catch (error) {
        console.error("Failed to load levels:", error);
        setLevels([]);
      }
    };
    if (courseId) {
      loadLevels();
    }
  }, [courseId]);

  
  return (
    <Layout>
      <Topbar/>
        <ul className="relative flex flex-col justify-center items-center gap-2 mt-16">
          {levels.map((level, index) => (
            <li 
              className={`relative w-[66px] h-[60px] cursor-pointer group ${position[index % position.length]}`} 
              key={level.id}
              onClick={() => openClass(level)}
            >
                {/* Background Shadow Span */}
                <span className={`absolute top-2 left-0 w-[66px] h-[60px] rounded-full border-10
                  ${levelStyles[index % levelStyles.length]}`}></span>
                
                {/* Foreground Colored Content & Reflections */}
                <div className={`relative z-10 w-full h-full rounded-full flex justify-center items-center font-poppinsbold text-white text-xl shadow-md group-hover:translate-y-1 group-active:translate-y-1 transition-all duration-75 overflow-hidden
                  ${levelStyles[index % levelStyles.length]}`}>
                  
                  {/* Reflection Highlights overlaying background */}
                  <span className="absolute w-12 h-12 top-1 left-2 z-10 rounded-full bg-white/20"></span>
                  <span className={`absolute w-12 h-2 rotate-135 top-5 left-1 z-10 ${levelStyles[index % levelStyles.length]}`}></span>
                  <span className={`absolute w-11.5 h-3 rotate-135 top-9 left-6 rounded-full z-10 ${levelStyles[index % levelStyles.length]}`}></span>
                  
                  {/* The Level text on topmost layer */}
                  <span className="relative z-20">
                    {level.is_answer === false ? "X" : level.level_number}
                  </span>
                </div>
            </li>
          ))}
        </ul>
    </Layout>
  );
}
