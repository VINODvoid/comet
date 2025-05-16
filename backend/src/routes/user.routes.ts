import { Router } from "express";
import { loginUser, registerUser } from "../controller/user.controller";

export const UserRouter = Router();

UserRouter.post("/sign-up",registerUser);
UserRouter.post("/sign-in",loginUser);