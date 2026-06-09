import express from "express";
import * as LevelController from "../controllers/level.controller.js";

const router = express.Router();

router.get("/", LevelController.index);
router.get("/:id", LevelController.show);

export default router;