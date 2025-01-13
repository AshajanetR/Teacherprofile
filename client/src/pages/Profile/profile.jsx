import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const identity =useSelector((state)=>state.profileid.value);
    // console.log(identity);
    const teacher=useSelector((state)=>state.profileinfo.value);
    // console.log("teacherinfo",teacherinfo);
  return (
    <div>
       <div className="max-w-lg mx-auto bg-red-200 mt-[140px] rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-center pt-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Default profile picture if none exists
          alt={teacher.name}
          className="w-32 h-32 rounded-full border-4 border-gray-200"
        />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">{teacher.name}</h2>
        <p className="text-lg text-center text-gray-500">{teacher.subject}</p>
        <div className="mt-4 space-y-2">
          <p className="text-base text-gray-700">
            <strong>Email:</strong> {teacher.email}
          </p>
          <p className="text-base text-gray-700">
            <strong>Phone:</strong> {teacher.phone}
          </p>
          <p className="text-base text-gray-700">
            <strong>Bio:</strong> {teacher.bio}
          </p>
          <p className="text-base text-gray-700">
            <strong>Experience:</strong> {teacher.experience}
          </p>
          <p className='text-base text-gray-700'><strong>Classes Handled:</strong> {Array.isArray(teacher.classesHandled) ? teacher.classesHandled.join(', ') : 'N/A'}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile