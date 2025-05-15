import { Request, Response } from "express"

export const registerUser = (req:Request,res:Response)=>{
    res.send("User Registered successfully")
}
export const loginUser = (req:Request,res:Response)=>{
    res.send("User Loginned successfully");
}