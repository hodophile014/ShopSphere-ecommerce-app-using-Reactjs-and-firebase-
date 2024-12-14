import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex justify-center items-center bg-gray-800 text-white w-full '>
        <div className='flex flex-row gap-x-7'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-white'>Terms & Conditions</h1>
            <Link to="/terms">Terms</Link>
            <Link to="/page1">About us</Link>

          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold'>About</h1>
            <Link to="/welcome">How it works</Link>
            <span>Our packages</span>
            <span>Promotions</span>
            <span>Refer a friend</span>


          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-white'>Delivery</h1>
           <span>Cost of Delivery</span>
           <span>Payment Method</span>
           <span>Delivery Areas</span>
           <span>Returns</span>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold'>Contact</h1>
            <span>Custom, Chattak</span>
            <span>XYZ ROAD</span>
            <span>ShopSphere.com</span>
            <span>+88017100000</span>
          </div>
        </div>
      
    </div>
  )
}

export default Footer
