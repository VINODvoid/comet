import express from "express";
import dotenv from 'dotenv'
import { ConnectDb } from "./db";


const app = express();
dotenv.config();

app.get("/",(req,res)=>{
    res.send("Backend Running")
})
ConnectDb().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);  
})
})
