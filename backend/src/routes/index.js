import { Router } from 'express';

import courseRoute from "./course.route.js";
import levelRoute from "./level.route.js";
import avatarRoute from "./avatar.route.js";
import questionRoute from "./question.route.js";

const router = Router();

// Test Route
router.use("/courses", courseRoute);
router.use("/levels", levelRoute);
router.use("/avatars", avatarRoute);
router.use("/questions", questionRoute);

export default router;
