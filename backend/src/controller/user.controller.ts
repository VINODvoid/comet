import { Request, Response } from "express"
import {z} from 'zod';
import { User } from "../model/user.model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


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
        // hashing the password
        const hashPassword = await bcrypt.hash(password,10);

        const user = new User({
            email,
            username,
            password:hashPassword
        });

        // save the user in db
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
export const loginUser = async(req:Request,res:Response)=>{
    try {
        const {email,username,password} = UserSchema.parse(req.body);
    
        // check the fields
        if(!email || !password)
        {
            res.status(400).json({
                message:"All fields are required"
            })
            return;
        }
        const existingUser  = await User.findOne({
            email
        })
        if(!existingUser || !existingUser.password)
        {
            res.status(401).json({
                message:"User or password is not found "
            })
            return;
        }

        // password comparision
        const comparePassword = await bcrypt.compare(password,existingUser.password);
        if(!comparePassword)
        {
            res.status(403).json({
                message:"Invalid credentials"
            })
        }
        // .env has secret key
        if(!process.env.SECRET_KEY)
        {
            throw new Error("Secret key is not present");
        }

        // generate the token
        const token =  jwt.sign({userId:existingUser._id},process.env.SECRET_KEY,{
            expiresIn:"1h"
        });
        
        res.status(200).json({
            message:"User logged in successfully",
            token,
            userId:existingUser._id
        });
        return;
    } catch (error) {
        if(error instanceof Error)
        {
            res.status(500).json({
                message:error
            })
            return;
        }
        res.status(501).json({
            message:"internal server error in logging"
        })
        return;
    }
}