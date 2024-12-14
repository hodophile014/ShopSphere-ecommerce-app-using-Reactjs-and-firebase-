import React from 'react'

function Welcome() {
    const style = {
        backgroundImage: `url(${'https://i.pinimg.com/736x/46/ee/f0/46eef0dbfc52351d086424ed4e925391.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      };
    
  return (
    <div className='flex h-[100dvh] w-full justify-center items-center' style={style}>
        <div className='flex flex-col gap-y-20'>
            <div className='flex flex-col'>
                <span className='text-3xl text-black font-bold'>Welcome to our</span>
                <span className='text-3xl text-green-500 font-bold'>E-Grocery</span>
            </div>
            <div className='flex flex-col gap-y-3'>
                <button className='text-white bg-green-500 rounded-md px-2 py-3'>Continue with Email or phone</button>
                <button className='text-black bg-white rounded-md px-2 py-3'>Create an account</button>
            </div>

        </div>
      
    </div>
  )
}

export default Welcome
