import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Page1() {
  const navigate = useNavigate();
  
  
  return (
    <div className='flex justify-center items-center h-[100dvh] w-full bg-white'>
        <div className='flex flex-col justify-center items-center gap-y-8'>
            <div>
              <img src="https://i.pinimg.com/736x/8a/a4/b6/8aa4b6c9153d39f1358d5115e0fef56d.jpg" alt=""></img>
            </div>
            <div className='flex flex-col text-black gap-y-3'>
                <span className='text-2xl font-bold text-center'>Browse all the category</span>
                <span>Find What You're Looking For – Browse All Categories</span>
            </div>
            <div>
              <button className='text-white bg-green-500 h-[60px] w-[60px] text-2xl px-2 rounded-full hover:px-3' onClick={()=>{navigate("/page2")}}><FaLongArrowAltRight /></button>
            </div>

        </div>
      
    </div>
  )
}

export default Page1
