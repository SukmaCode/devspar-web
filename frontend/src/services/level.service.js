import api from "../library/api";

export const getLevels = async () => {
    const response = await api.get("/levels");
    return response.data;
};