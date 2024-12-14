import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Page2() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-[100dvh] w-full bg-white'>
        <div className='flex flex-col justify-center items-center gap-y-8'>
            <div>
              <img src="https://i.pinimg.com/736x/15/82/2c/15822cebccd50896f5bfcb339c09af17.jpg" alt=""></img>
            </div>
            <div className='flex flex-col text-black gap-y-3'>
                <span className='text-2xl font-bold text-center'>Amazing Discounts & Offers</span>
                <span className='text-gray-400 text-center'>Shop Till You Drop (But Pay Half the Price).</span>
            </div>
            <div>
              <button className='text-white bg-green-500 h-[60px] w-[60px] text-2xl px-2 rounded-full hover:px-3' onClick={()=>{navigate("/page3")}}><FaLongArrowAltRight /></button>
            </div>

        </div>
      
    </div>
  )
}

export default Page2
