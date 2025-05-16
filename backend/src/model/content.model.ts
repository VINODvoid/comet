import mongoose, { Types } from "mongoose";

const ContentSchema = new mongoose.Schema({
    link:{
        type:String,
        requireLd:true,
    },
    contentType:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        required:true,
    },
    userId: {
        type:Types.ObjectId,
        ref:'User',
        required:true,  
    }
})


export const Content = mongoose.model("Content",ContentSchema);