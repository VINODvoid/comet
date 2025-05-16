import { Request, Response } from "express"
import {z} from 'zod';
import { User } from "../model/user.model";
import bcrypt from 'bcryptjs';
const UserSchema  = z.object({
    username:z.string(),
    email:z.string(),
    password:z.string().min(8,{message:"Minimum Length of 8 characters"}),
})
export const registerUser = async(req:Request,res:Response)=>{
    try {
        const validateData=UserSchema.parse(req.body);
        const {username,email,password} = validateData;

        // check whether all fields are filled or not 
        if(!username || !email || !password)
        {
            res.status(400).json({
                message:"All fields are required !"
            })
        }
        // user exists or not 
        const existingEmail =await User.findOne({
            email:email
        })
        if(existingEmail)
        {
           res.status(509).json({
            message:"User email already registerd"
           })
           return ;
        }

        const hashPassword = await bcrypt.hash(password,10);

        const user = new User({
            email,
            username,
            password:hashPassword
        });

        await user.save();
        res.status(201).json({
            message:"User registered successfully !",
        })
        return ;
    } catch (error) {
        if(error instanceof Error)
        {
            res.json({
                error,
            })
        }
        res.status(501).json({
            message:"internal server error in registration"
        })
        return ;
    }
}
export const loginUser = (req:Request,res:Response)=>{
    res.send("User Loginned successfully");
}