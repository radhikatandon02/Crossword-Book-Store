
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";


const Login = () => {
    const [message, setMessage] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = (data) => {
        if(!data.email || !data.password){
            setMessage("Please fill in required fields");
        }
        else{
            setMessage("");
            console.log(data)
        }
    }

    const handleGoogleSignIn = () =>{

    }
   
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                    {...register("email", { required: true })} 
                    type="email" name="email" id="email" placeholder="Email Address" className="shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                    {
                        errors.email && <p className="text-red-500 text-xs mb-3">Email is required</p>
                    }
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                    {...register("password", { required: true })} 
                    type="current-password" name="password" id="password" placeholder="Password" className="shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                    {
                        errors.password && <p className="text-red-500 text-xs mb-3">Password is required</p>
                    }
                </div>
                    {/* Error message display */}
                    {
                        message && <p className="text-red-500 text-xs mb-3">{message}</p>
                    }
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 font-bold px-8 py-2 text-white rounded focus:outline-none">
                        Login
                    </button>
                </div>
            </form>
            <p className="align-baseline font-medium mt-4 text-sm">Do not have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link> here</p>
            {/* google sign in */}
            <div className="mt-4">
                <button
                onClick={handleGoogleSignIn} 
                className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                <FaGoogle className="mr-2"/>
                Sign in with Google
                </button>
            </div>
            <p className="mt-5 text-center text-gray-500 text-xs">&copy; All rights reserved</p>
        </div>
    </div>
  )
}

export default Login