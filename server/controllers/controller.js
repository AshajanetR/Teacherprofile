import { teacherModel } from "../model/schema.js";
import mongoose from "mongoose";

export const teacherdata=async(req,res)=>{
    try {
        const { id, name, subject, email, phone, profilePicture, bio, experience, classesHandled } = req.body;
        const result = await teacherModel.create({
          id,
          name,
          subject,
          email,
          phone,
          profilePicture,
          bio,
          experience,
          classesHandled,
        });
        res.status(201).json({
          message: 'Teacher data added successfully',
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          message: 'Failed to add teacher data',
          error: error.message,
        });
      }
};

export const getdata=async(req,res)=>{
    try {
        // Fetch all teachers from the database
        const teachers = await teacherModel.find();
    
        // If no teachers found, send an empty array
        if (!teachers) {
          return res.status(404).json({ message: 'No teachers found' });
        }
    
        // Send the teachers as a response
        res.status(200).json(teachers);
      } catch (error) {
        // If there is an error, send a 500 status and error message
        res.status(500).json({ message: 'Server error', error: error.message });
      }
}


export const getuserdata=async(req,res)=>{
    try {
        const teacherId = req.params.id;
    
        // Convert teacherId to ObjectId before querying
        if (!mongoose.Types.ObjectId.isValid(teacherId)) {
          return res.status(400).json({ message: 'Invalid teacher ID' });
        }
    
        const teacher = await teacherModel.findById(teacherId);
        if (!teacher) {
          return res.status(404).json({ message: 'Teacher not found' });
        }
    
        res.status(200).json(teacher);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
};
