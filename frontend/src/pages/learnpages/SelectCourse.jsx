import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import HTML from "../../assets/images/thumbnail_html.webp";
import CSS from "../../assets/images/thumbnail_css.webp";
import JS from "../../assets/images/thumbnail_js.webp";
import PYTHON from "../../assets/images/thumbnail_python.webp";
import PHP from "../../assets/images/thumbnail_php.webp";

export default function SelectCourse() {
  const [classes] = useState([
    {
      id: 1,
      name: "HTML",
      code: "Hypertext Markup Language",
      image: HTML,
      desc: `HTML is a standard markup language for creating web pages and their structure.`,
    },
    {
      id: 2,
      name: "CSS",
      code: "Cascading Style Sheet",
      image: CSS,
      desc: "CSS (Cascading Style Sheets) is a language used to style and design web pages.",
    },
    {
      id: 3,
      name: "Javascript",
      code: "Javascript",
      image: JS,
      desc: "JavaScript is a powerful programming language that brings interactivity and dynamic behavior to web pages.",
    },
    {
      id: 4,
      name: "Python",
      code: "Python",
      image: PYTHON,
      desc: "🐍 Python is a high-level programming language used for web development, data analysis, artificial intelligence and more.",
    },
    {
      id: 5,
      name: "PHP",
      code: "Hypertext Preprocessor",
      image: PHP,
      desc: "PHP is a popular server-side programming language, especially for web development.",
    },
  ]);
  const openClass = (cls) => {
    if (cls.name === "HTML") {
      navigation.navigate("HtmlLevel");
    } else if (cls.name === "CSS") {
      navigation.navigate("CssLevel");
    } else if (cls.name === "Javascript") {
      navigation.navigate("JavascriptLevel");
    } else if (cls.name === "Phyton") {
      navigation.navigate("PhytonLevel");
    } else if (cls.name === "PHP") {
      navigation.navigate("PHPLevel");
    } else {
      openModal(cls);
    }
  };
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {classes.map((cls) => (
        <CourseCard
          key={cls.id}
          classData={cls}
          onPress={() => openClass(cls)}
        />
      ))}
    </div>
  );
}
