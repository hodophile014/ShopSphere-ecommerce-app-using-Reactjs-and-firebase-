import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Page3() {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center h-[100dvh] w-full bg-white'>
        <div className='flex flex-col justify-center items-center gap-y-8'>
            <div>
              <img src="https://i.pinimg.com/736x/bf/48/ab/bf48ab5d505f953ab5d8043a3e9a3d34.jpg" alt=""></img>
            </div>
            <div className='flex flex-col text-black gap-y-3'>
                <span className='text-2xl font-bold text-center'>Delivery in 30 min</span>
                <span className='text-gray-400 text-center'>Lightning-Fast Delivery – Because Time Matters!</span>
            </div>
            <div>
              <button className='text-white bg-green-500 h-[60px] w-[60px] text-2xl px-2 rounded-full hover:px-3' onClick={()=>{navigate("/page2")}}><FaLongArrowAltRight /></button>
            </div>

        </div>
      
    </div>
  )
}

export default Page3
