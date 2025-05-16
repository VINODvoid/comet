import { Router } from "express";
import { addContent,contentDetails, deleteContent } from "../controller/content.controller";
import { authMiddleware } from "../middleware/auth.middleware";

export const ContentRouter = Router();

ContentRouter.post("/addcontent",authMiddleware,addContent);
ContentRouter.get("/content",authMiddleware,contentDetails);
ContentRouter.delete("/delete/:contentId",authMiddleware,deleteContent);

