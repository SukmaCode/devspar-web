import api from "../library/api";

export const getCourses = async () => {
    const response = await api.get("/courses");
    return response.data;
};