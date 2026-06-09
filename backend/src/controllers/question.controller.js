import { getQuestionsByLevelId } from "../services/question.service.js";

export const getQuestionsByLevelIdController = async (req, res) => {
    try {
        const { levelId } = req.params;
        const questions = await getQuestionsByLevelId(levelId);
        return res.status(200).json({
            success: true,
            data: questions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};