import api from "../library/api";

export const getAllAvatar = async () => {
    const response = await api.get("/avatars");
    return response.data.data;
};

export const getAvatarById = async (id) => {
    const response = await api.get(`/avatars/${id}`);
    return response.data.data;
};