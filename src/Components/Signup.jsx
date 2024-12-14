import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { FaGooglePlus } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { auth } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [success,setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) =>{
    e.preventDefault();
    setError("");
     try{
        await createUserWithEmailAndPassword(auth,email,password);
        setSuccess("Signup Successful! Please Login");
        navigate("/login")
        setEmail("")
        setPassword("")
     }
     catch(err){
        setError(err.message)
     }
  }
  return (
    <div className='flex justify-center items-center h-[100dvh] w-full bg-green-500'>
    <div className='flex flex-col gap-y-4 justify-center items-center bg-white  rounded-md h-4/5 w-1/2'>
     <div className='flex'>
      <span className='text-8xl text-green-500 bg-gray-200 rounded-full'>
      <GiShoppingCart />
      </span>

     </div>
     <div className='flex flex-col'>
      <span className='text-black text-2xl font-bold text-center'>Fill the details</span>
       <span className='text-green-500 text-xl text-center font-bold'>to Create Your account</span>
     </div>
     <div className='flex  flex-col gap-y-3'>
      <div className='flex flex-col gap-y-1'>
        <label className='text-gray-500'>Enter Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} className='h-[40px] rounded-md bg-gray-200'/>
      </div>
      <div className='flex flex-col gap-y-1'>
        <label className='text-gray-500'>Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} className='h-[40px] rounded-md bg-gray-200'/>
      </div>
      <div className='ml-auto'>
        <span className='text-black font-bold text-sm'><Link to="">Forget Password?</Link></span>

      </div>
      
     </div>
     <div className='flex'>
      <button className='text-white bg-green-500 h-[40px] w-[170px] hover:bg-green-600 rounded-md' onClick={handleSignup}>SignUp</button>
     </div>
     <div className='flex gap-x-2'>
      <button className='text-red-400 border-2 h-[40px] w-[100px] border-red-400 font-bold rounded-md flex py-2'><span className='m-1'><FaGooglePlus /></span><span>Google</span></button>
      <button className='text-black border-2 h-[40px] w-[100px] border-black font-bold rounded-md flex py-2'><span className='m-1'><FaApple /></span><span>Apple</span></button>
      
     </div>
     <div className='flex flex-row'>
      <span className='text-gray-500'>Already have an account Account?</span>
      <span className='text-green-500'><Link to="/login">Login</Link></span>
      </div>
     {error && <p style={{ color: "red" }}>{error}</p>}
     {success && <p style={{ color: "blue" }}>{success}</p>}
    </div>
    </div>
  )
}

export default Signup
