import { useNavigate } from "react-router-dom";

const CourseCard = ({ classData }) => {
  const navigate = useNavigate();

  const onPress = () => {
    navigate(`/level/${classData.id}`);
  };

  return (
    <div className="bg-slate-900 flex flex-col rounded-xl border-2 border-gray-400 overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      {/* Image */}
      <img
        src={classData.image}
        className="h-40 w-full bg-cover bg-center object-cover object-center"
      />

      {/* Footer */}
      <div className="h-full flex flex-col justify-between p-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-white font-uncialantiqua">
            {classData.name}
          </h2>

          <p
            className="text-yellow-400 text-sm font-uncialantiqua line-clamp-1"
            title={classData.code}
          >
            {classData.code}
          </p>

          <p
            className="text-gray-400 text-sm line-clamp-2"
            title={classData.description}
          >
            {classData.description}
          </p>
        </div>
        {/* Select Button */}
        <button
          key={classData.id}
          onClick={onPress}
          className="w-full mt-2 bg-yellow-400 text-black font-uncialantiqua py-2 rounded-sm hover:bg-yellow-300 active:scale-95 transition"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
