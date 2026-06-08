import { useNavigate } from "react-router-dom";

const CourseCard = ({ classData }) => {
  const navigate = useNavigate();

  const onPress = () => {
    switch (classData.name) {
      case "HTML":
        navigate("/html-level");
        break;
      case "CSS":
        navigate("/css-level");
        break;
      case "Javascript":
        navigate("/javascript-level");
        break;
      case "Python":
        navigate("/python-level");
        break;
      case "PHP":
        navigate("/php-level");
        break;
      default:
        console.log("Halaman belum tersedia untuk:", classData.name);
    }
  };

  return (
    <div className="bg-slate-900 rounded-xl border-2 border-gray-400 overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      {/* Image */}
      <img
        src={classData.image}
        className="h-40 w-full bg-cover bg-center object-contain object-center"
      />

      {/* Footer */}
      <div className="p-4 space-y-2">
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
          className="text-gray-400 text-sm line-clamp-3"
          title={classData.desc}
        >
          {classData.desc}
        </p>

        {/* Select Button */}
        <button
          onClick={onPress}
          className="w-full mt-2 bg-yellow-400 text-black font-uncialantiqua py-2 rounded-lg hover:bg-yellow-300 active:scale-95 transition"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
