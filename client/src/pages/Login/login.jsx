import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-red-50">
        <button 
            onClick={() => {
                navigate("/dashboard")
            }} 
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 hover:shadow-xl transform transition duration-300 ease-in-out">
            Login
        </button>
    </div>
  )
}

export default Login;
