import express from "express";
import dotenv from 'dotenv'
import { ConnectDb } from "./db";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.routes";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend Running")
})
app.use("/api/v1",UserRouter);
ConnectDb().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);  
})
})


