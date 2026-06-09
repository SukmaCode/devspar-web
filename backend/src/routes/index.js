import { Router } from 'express';

import courseRoute from "./course.route.js";
import levelRoute from "./level.route.js";

const router = Router();

// Test Route
router.use("/courses", courseRoute);
router.use("/levels", levelRoute);

export default router;
