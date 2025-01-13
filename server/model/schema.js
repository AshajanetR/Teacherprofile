import mongoose from "mongoose";

const teacherSchema=new mongoose.Schema({
    id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  classesHandled: {
    type: [String],
    required: true,
  },

});


export const teacherModel=mongoose.model('teacherdb',teacherSchema);