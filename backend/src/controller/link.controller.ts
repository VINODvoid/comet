import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { Content } from "../model/content.model";

export const shareLink = async(req:AuthRequest,res:Response)=>{
    try {
        const userid = req.UserID;
         const contents = await Content.find({ userId:userid });
        res.status(200).json({ data: contents });
        return;
    } catch (error) {
        res.status(501).json({
            message:"Unable to view the content"
        })
    }
}