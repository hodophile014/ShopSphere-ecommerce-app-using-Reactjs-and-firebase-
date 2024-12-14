
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../config';
import { FaArrowLeftLong } from "react-icons/fa6";



function Payment() {
  const {cartItems,totalAmount,clearCart} = useContext(CartContext)
  const [address,setAddress] = useState(' ');
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();



  const handlePayment = async () =>{
    try{
      const userId = currentUser.email;
      const orderData ={ 
        userId,
        products :cartItems,
        totalAmount,
        address,
        status: 'Paid',
        timestamp: serverTimestamp(),
      }
      const orderRef = await addDoc(collection(db,'orders'),orderData);
      clearCart();
      navigate('/order-placed',{
        state:{
          order:{
            id: orderRef.id,
            totalAmount,
            address,
          }
        }
      })


      
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='flex justify-center items-center h-[100dvh] w-full'>
      <div className='flex flex-col items-center justify-center'>
         <div className='flex flex-row gap-x-11'>
           <span><FaArrowLeftLong /></span>
           <span className='text-xl underline'>Checkout</span>

         </div>
         <div className='border-2 rounded-md px-2 px-4 m-1 flex flex-row items-center justify-center'>
          <p className='text-xl text-green-500'>Total Amount: <span className='text-black'>${totalAmount}</span></p>
         </div>
         <div className='flex flex-col'>
          <span>Select Payment system</span>
          <span className='flex flex-row border-2 border-black rounded-md'>
          
          <button><img src="https://i.pinimg.com/736x/2a/63/e4/2a63e48fe716f0e448a6815ae6dd5b32.jpg" alt="" className='h-[90px] m-1 rounded-md' /></button>
          <button><img src="https://i.pinimg.com/736x/7c/81/52/7c8152cb8959cd0155c5f8d6cc3c7cd6.jpg" alt="" className='h-[90px] m-1 rounded-md' /></button>
          <button><img src="https://i.pinimg.com/736x/3e/35/15/3e3515428abe4843bb69cf936e404090.jpg" alt="" className='h-[90px] m-1 rounded-md' /></button>
          
          
          </span>
         </div>
         <div className='flex flex-col'>
          <textarea className='m-1 border-2 border-black w-[300px]'
          placeholder='Enter your Address'
          value={address}
          onChange={(e)=>setAddress(e.target.value)}></textarea>
          <button onClick={handlePayment} className='bg-green-500 text-white py-2 rounded-md'>Pay Now</button>

         </div>
      </div>
    </div>
  )
}

export default Payment
