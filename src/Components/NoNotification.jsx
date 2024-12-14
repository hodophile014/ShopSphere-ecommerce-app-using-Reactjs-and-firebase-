import React from 'react'
import { Link } from 'react-router-dom'

function NoNotification() {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4 h-[100dvh] w-full'>
        <div className=''>
             <img src="https://i.pinimg.com/736x/4b/13/8f/4b138f2ac59a1d74eb4c011298472235.jpg" className='h-[200px]'/>
        </div>
        <div className='text-center'>
        <h1 className='text-xl font-bold'>Oppss!</h1>
        <p>There a no notifications for you.</p>
        </div>
        <div className='m-2'>
          <Link to="/" className='text-xl px-2 py-2 w-1/3 bg-green-500 text-white rounded-md'>Start Browsing</Link>
        </div>
      
    </div>
  )
}

export default NoNotification
