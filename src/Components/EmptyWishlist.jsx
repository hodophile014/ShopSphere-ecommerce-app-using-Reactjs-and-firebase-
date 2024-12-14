import React from 'react'
import { Link } from 'react-router-dom'

function EmptyWishlist() {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4 h-[100dvh] w-full'>
        <div className=''>
             <img src="https://i.pinimg.com/736x/e5/55/87/e55587d66eb7b637fc19ff959a6b04ab.jpg" className='h-[200px]'/>
        </div>
        <div className='text-center'>
        <h1 className='text-xl font-bold'>Oppss!</h1>
        <p>Sorry, you have no product in your wishlist.</p>
        </div>
        <div className='m-2'>
          <Link to="/products" className='text-xl px-2 py-2 w-1/3 bg-green-500 text-white rounded-md'>Start Browsing</Link>
        </div>
      
    </div>
  )
}

export default EmptyWishlist
