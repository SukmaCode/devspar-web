import express from "express";
import * as CourseController from "../controllers/course.controller.js";

const router = express.Router();

router.get("/", CourseController.index);
router.get("/:id", CourseController.show);

export default router;