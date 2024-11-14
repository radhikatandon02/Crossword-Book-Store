import { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import getBaseUrl from "../utils/baseURL";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [message, setMessage] = useState("");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const auth = response.data;
            if(auth.token){
                localStorage.setItem('token', auth.token);
                setTimeout(()=>{
                    localStorage.removeItem('token')
                    alert('Session Expired! Please Login Again.');
                    navigate("/");
                }, 3600*1000)
            }
            alert("Admin Login Successful!");
            navigate("/dashboard")
        } catch (error) {
            setMessage("Please provide a valid email and password") 
           console.error(error)
        }
    }
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl text-center font-semibold mb-4">Admin Dashboard Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                    {...register("username", { required: true })} 
                    type="text" name="username" id="username" placeholder="Username" className="shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                    {
                        errors.email && <p className="text-red-500 text-xs mb-3">Username is required</p>
                    }
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                    {...register("password", { required: true })} 
                    type="password" name="password" id="password" placeholder="Password" className="shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                    {
                        errors.password && <p className="text-red-500 text-xs mb-3">Password is required</p>
                    }
                </div>
                    {/* Error message display */}
                    {
                        message && <p className="text-red-500 text-xs mb-3">{message}</p>
                    }
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 font-bold w-full px-8 py-2 text-white rounded focus:outline-none">
                        Login
                    </button>
                </div>
                <p className="mt-5 text-center text-gray-500 text-xs">&copy; All rights reserved</p>
            </form>
           
                    </div>
    </div>
  )
}

export default AdminLogin