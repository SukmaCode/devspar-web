import { getAllAvatar, getAvatarById } from "../services/avatar.service.js";

export const index = async (req, res) => {
    try {
        const avatar = await getAllAvatar();
        return res.status(200).json({ success: true, data: avatar });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const avatar = await getAvatarById(id);
        return res.status(200).json({ success: true, data: avatar });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
