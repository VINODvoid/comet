import { Router } from "express";
import { loginUser, registerUser } from "../controller/user.controller";

export const UserRouter = Router();

UserRouter.get("/register",registerUser);
UserRouter.get("/login",loginUser);