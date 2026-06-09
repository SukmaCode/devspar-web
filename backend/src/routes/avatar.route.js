import express from "express";
import * as AvatarController from "../controllers/avatar.controller.js";

const router = express.Router();

router.get("/", AvatarController.index);
router.get("/:id", AvatarController.show);

export default router;