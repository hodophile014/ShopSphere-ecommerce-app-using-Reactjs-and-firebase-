import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

function Terms() {
  return (
    <div className='flex justify-center items-center h-full w-full bg-green-500 py-4'>
        <div className='flex flex-col justify-center items-center w-2/3 gap-y-4 bg-white rounded-md bg-opacity-50'>
            <div className='flex  border-b-2 border-gray-400 gap-x-3 px-2'>
                <span className='mr-auto m-2 text-xl'>
                <Link to=""><FaArrowLeft /></Link></span>
                <span className='text-black text-2xl'>
                    Term & Conditions
                </span>
            </div>
            <div className='flex flex-col px-2'>
                <span className='text-xl font-bold text-center'>
                 General site usage last revised 
                 December 12-01-2023
                </span>
                <span className='text-gray-500 text-center'>
                Welcome to ShopSphere. 
                By accessing or using this website, 
                you agree to comply with and be 
                bound by the following terms and conditions. 
                If you do not agree, please refrain from using 
                our site.

                </span>
            </div>
            <div className='flex flex-col gap-y-2 px-2 py-4'>
                <span className='text-xl font-bold text-black'>
                    1. Agreement
                </span>
                <span className='text-gray-500'>
                By using ShopSphere,
                 you agree to provide accurate information,
                comply with laws, and be responsible for your 
                account’s security. Prohibited actions include 
                fraud, unauthorized access, and interference with 
                the site. You accept the risks of using third-party links. 
                Violations may
                 result in account suspension or legal action.

                </span>
            </div>
            <div className='flex flex-col gap-y-2 px-2 py-4'>
                <span className='text-xl font-bold text-black'>
                    2. Account
                </span>
                <span className='text-gray-500'>
                To access certain features of our service, 
                users may be required to create an account. 
                You agree to provide accurate, complete, and 
                current information during registration and to 
                update 
                such information to maintain its accuracy. 

                </span>
            </div>
            <div className='flex flex-col gap-y-2 px-2 py-4'>
                <span className='text-xl font-bold text-black'>
                    3. Relationship with Groceries
                </span>
                <span className='text-gray-500'>
                ShopSphere operates as a platform to
                 facilitate the purchase, sale, or delivery 
                 of grocery products. We are not the manufacturers, 
                 producers, or direct suppliers 
                of any groceries unless explicitly stated.

                </span>
            </div>


        </div>
      
    </div>
  )
}

export default Terms
