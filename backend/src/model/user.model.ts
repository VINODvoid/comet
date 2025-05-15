import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})

export const User = mongoose.model("User",UserSchema);