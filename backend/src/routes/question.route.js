import express from "express";
import * as QuestionController from "../controllers/question.controller.js";

const router = express.Router();

router.get("/:levelId", QuestionController.getQuestionsByLevelIdController);

export default router;