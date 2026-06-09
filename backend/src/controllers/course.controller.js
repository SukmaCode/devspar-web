import { getAllCourses, getCoursesById } from "../services/course.service.js";

export const index = async (req, res) => {
    try {
        const courses = await getAllCourses();

        return res.status(200).json({
            success: true,
            data: courses,
        });
    } catch (error) {
        console.error("Supabase Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await getCoursesById(id);

        return res.status(200).json({
            success: true,
            data: course,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};