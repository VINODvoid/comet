import {  Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { Content } from "../model/content.model";
import {z} from 'zod';

const ContentSchema =  z.object({
    link:z.string(),
    contentType:z.string(),
    title:z.string(),
    tag:z.string(),
})
export const addContent = async(req:AuthRequest,res:Response)=>{
    try {
        const validateData = ContentSchema.parse(req.body);
        const userId = req.UserID;

        // check all the fields
        const {link , contentType ,title ,tag} = validateData;
        if(!link || ! contentType || ! title || ! tag)
        {
            res.status(401).json({
                message:"All fields are required ",
            })
            return ;
        }
        const content = new Content({
            contentType,
            link,
            tag,
            title,
            userId
        });
        await content.save();
        res.status(201).json({
            message:"Content added successfully",
        })
        return ; 
    } catch (error) {
        if(error instanceof Error)
        {
            res.status(501).json({
               message:error
            });
            return;
        }
        res.status(500).json({
             message:"internal server error while adding content"
        })
    }
}
export const contentDetails = async(req:AuthRequest,res:Response) => {
    try {
        const userid = req.UserID;
        if(!userid)
        {
            res.status(401).json({
                message:"UserId is not found"
            })
        }
        const contentData = await Content.find({userId:userid})
        res.status(200).json({
            message:"Data fetched successfully",
            data:contentData,
        })
        return;
    } catch (error) {
        res.status(401).json({
            message:"Unable to fetch content",
        })
    }
}

export const deleteContent = async(req:AuthRequest,res:Response)=>
{
    try {
        
    } catch (error) {
        res.status(401).json({
            message:"Unable to delete the content"
        })
    }
}

