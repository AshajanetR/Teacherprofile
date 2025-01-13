import express from "express";
import { getdata, getuserdata, teacherdata } from "../controllers/controller.js";

export const router=express.Router();

router.post("/teacherdata",teacherdata);
router.get("/getdata",getdata);
router.get("/getuserdata/:id",getuserdata);