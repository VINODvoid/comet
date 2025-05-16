import mongoose, { Types } from "mongoose";

const LinkSchema = new mongoose.Schema({
    hash:{
        type:String,
        required:true,
    },
    userId:{
        type:Types.ObjectId,
        ref:"User",
        requied:true
    }
})

export const Link = mongoose.model("Link",LinkSchema)