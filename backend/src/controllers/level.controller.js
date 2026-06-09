import { getAllLevels, getLevelById } from "../services/level.service.js";

export const index = async (req, res) => {
    try {
        const levels = await getAllLevels();

        return res.status(200).json({
            success: true,
            data: levels,
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
        const level = await getLevelById(id);

        return res.status(200).json({
            success: true,
            data: level,
        });
    } catch (error) {
        console.error("Supabase Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
