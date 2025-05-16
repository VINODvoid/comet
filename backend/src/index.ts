import express from "express";
import dotenv from 'dotenv'
import { ConnectDb } from "./db";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.routes";
import { ContentRouter } from "./routes/content.routes";
import cors from "cors"
const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(cors());


app.use("/api/v1",UserRouter);
app.use("/api/v1",ContentRouter);


ConnectDb().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);  })
})
.catch(()=>{
    console.log("Server Crashed @@ Restart the server ")
})



