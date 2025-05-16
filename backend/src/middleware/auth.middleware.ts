import { NextFunction, Request, Response } from "express";
import jwt,{ JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";


export interface AuthRequest extends Request
{
    UserID?:string | JwtPayload
}
export  const authMiddleware =(req:AuthRequest,res:Response,next:NextFunction)=>{
    try {
        const token = typeof req.headers.token === "string" ? req.headers.token : undefined;
        console.log("token: ",token);
        if(!token)
        {
            res.status(401).json({
                message:"Bad request of token"
            })
            return;
        }
        if(!process.env.SECRET_KEY)
        {
            res.status(501).json({
                message:"Error in secret key"
            })
            return;
        }
        const decode = jwt.verify(token,process.env.SECRET_KEY) as unknown as {userId :Types.ObjectId};
        req.UserID = decode.userId.toString();
        next();
    } catch (error) {
        res.status(401).json({
            message:"Invalid token error "+error
        })
    }
}