import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";


export const LinkRouter =Router();

LinkRouter.get("/share/:contentId",authMiddleware,)