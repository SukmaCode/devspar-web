import React, { useState, useEffect } from "react";
import CourseCard from "../../components/CourseCard";

import { getCourses } from "../../services/course.service";

export default function SelectCourse() {
  const [courses, setCourses] = useState([]);
    useEffect(() => {
        const loadCourses = async () => {
            try {
                const response = await getCourses();
                // response.data accesses the 'data' array in { success: true, data: [...] }
                setCourses(response?.data || []);
            } catch (error) {
                console.error("Failed to load courses:", error);
                setCourses([]);
            }
        };
        loadCourses();
    }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          classData={course}
        />
      ))}
    </div>
  );
}
