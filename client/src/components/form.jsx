import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { handleprofileinfo } from '../features/profileinfo';

const UpdateForm = ({isupdate}) => {
  const dispatch = useDispatch();
  const teacher = useSelector((state) => state.profileinfo.value);

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    bio: '',
    experience: '',
    profilePicture: ''
  });

  useEffect(() => {
    if (teacher) {
      setFormData({
        name: teacher.name || '',
        subject: teacher.subject || '',
        email: teacher.email || '',
        phone: teacher.phone || '',
        bio: teacher.bio || '',
        experience: teacher.experience || '',
        profilePicture: teacher.profilePicture || ''
      });
    }
  }, [teacher]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isupdate(false);
      const response = await axios.put(`http://localhost:3000/auth/updateuserdata/${teacher._id}`, formData);
      dispatch(handleprofileinfo(response.data)); 
      alert('Profile updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-m font-semibold text-center text-gray-800">Update Teacher Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-2 ">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-1 mt-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-700 text-sm">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-1 mt-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Enter subject"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-1 mt-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Enter email"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-1 mt-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-gray-700 text-sm">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-1 mt-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Enter bio"
            required
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-gray-700 text-sm">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-1 mt-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Enter experience"
            required
          />
        </div>

        <div>
          <label htmlFor="profilePicture" className="block text-gray-700 text-sm">Profile Picture URL</label>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            value="https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            onChange={handleChange}
            className="w-full p-1 mt-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Enter image URL"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded-lg text-sm hover:bg-red-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
