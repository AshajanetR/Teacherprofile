import express from "express";
import cors from "cors";
import bodyparser from "body-parser"
import mongoose from "mongoose";
import { router } from "./Routes/route.js";
import dotenv from 'dotenv';

dotenv.config();

const mongouri =process.env.MONGO_URI

mongoose.connect(mongouri)
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})


const app=express();
const PORT=process.env.PORT

app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use("/auth",router);

app.get("/",(req,res)=>{
   res.send("hello,world");
});

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
});