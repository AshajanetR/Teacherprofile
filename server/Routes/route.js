import express from "express";
import { getdata, getuserdata, teacherdata, updatedata } from "../controllers/controller.js";

export const router=express.Router();

router.post("/teacherdata",teacherdata);
router.get("/getdata",getdata);
router.get("/getuserdata/:id",getuserdata);
router.put("/updateuserdata/:id",updatedata);