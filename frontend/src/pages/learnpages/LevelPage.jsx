import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { getLevels } from "../../services/level.service";

export default function LevelPage() {
  const { courseId } = useParams();
  const [levels, setLevels] = useState([]);
  
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
        <ul className="grid grid-cols-5 gap-2 md:grid-cols-6 md:gap-4 lg:grid-cols-10">
          {levels.map((level) => (
            <li 
              className="w-full py-4 text-center bg-text-secondary font-poppinsbold text-black rounded-sm shadow-md" 
              key={level.id}
              onClick={() => openClass(level)}
            >
                {level.level_number}
            </li>
          ))}
        </ul>
    </Layout>
  );
}
