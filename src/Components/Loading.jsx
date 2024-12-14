import React from 'react'
import { BsCart4 } from "react-icons/bs";
function Loading() {
  return (
    <div className='flex justify-center h-[100dvh] items-center w-full bg-green-500'>
      <div className='flex flex-row  text-white'>
        <div className='text-8xl'><BsCart4 /></div>
        <div className='flex flex-col m-3'>
            <div className='text-4xl font-bold'>ShopSphere</div>
            <div>your daily needs</div>
        </div>

      </div>
      
    </div>
  )
}

export default Loading
