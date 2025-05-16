import { Router } from "express";
import { addContent } from "../controller/content.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export const ContentRouter = Router();

ContentRouter.post("/content",authMiddleware,addContent);

