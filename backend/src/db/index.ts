import mongoose from "mongoose";

export const ConnectDb = async()=>{
    try {
        const ConnectionInstance  = await mongoose.connect(`${process.env.MONGO_URL}comet`)
        console.log("MongoDb is connected !!");
        
    } catch (error) {
        console.log("Error while connection to DB",error);
    }
}