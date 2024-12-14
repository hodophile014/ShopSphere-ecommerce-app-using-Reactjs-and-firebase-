import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const OrderPlaced = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderDetails = location.state?.order || null;
    if(!orderDetails){
        navigate('/')
        return null;
    }
    const {id, totalAmount, address} = orderDetails;

  return (

    <div className='flex flex-col justify-center items-center h-[100dvh] w-full'>
        <div className='flex flex-col justify-center items-center gap-x-11'>
            <div>
                <img src="https://i.pinimg.com/736x/35/f3/6f/35f36fbc38aa13150c31a01c26ff1ecc.jpg" className="w-[200px]" alt=""></img>
            </div>
            <div className='flex flex-col justify-center items-center gap-x-4'>
                <span className='text-xl font-bold'>Order Placed successfully</span>
                <span className='text-sm text-gray-500'>
                    Thanks for your order. your order has been placed successfully.Please continue to browse
                </span>
            </div>
            <div className='flex flex-col justify-center items-center gap-x-6'>
                <button className='text-xl text-white bg-green-500 px-2 py-2 rounded-md'>
                 Continue 
                </button>
                <Link to="" className='text-green-500 text-sm'>Track Order</Link>
            </div>
        </div>

      
    </div>
  )
}

export default OrderPlaced
