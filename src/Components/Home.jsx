import React from 'react'
import { CiSearch } from "react-icons/ci";
import Footer from './Footer';

function Home() {
  const style = {
    backgroundImage: "url('https://img.freepik.com/fotos-premium/layout-de-alimentacao-saudavel-e-limpa-comida-vegetariana-e-conceito-de-nutricao-dieta-varios-ingredientes-de-legumes-frescos-para-salada-no-fundo-da-mesa-amarela-vista-superior-moldura-banner_130265-1137.jpg')",
    backgroundSize: 'cover', // or 'contain', 'auto', etc.
    backgroundRepeat: 'no-repeat',
   
  };

  return (
    <div className='flex justify-center items-center h-[100dvh] w-full bg-white flex-col gap-y-11'>
      <div className='flex flex-col justify-center  w-4/5 items-center h-4/5 gap-y-8 rounded-lg ' style={style}>
        <div className='flex flex-col gap-y-2'>
          <span className='text-5xl font-bold'>Order Your</span>
          <span className='text-5xl font-bold'>Daily Groceries</span>
          <span className='text-3xl font-bold text-green-500'>{"#"}Free Delivery</span>
        </div>
        <div className='flex'>
          <div className='flex flex-row bg-white w-[300px] h-[40px] rounded-full'>
            <span className='px-2 py-2 text-xl'><CiSearch /></span>
            <span className='px-2 py-2'><input type="text" name="" id="" /></span>
            <span className=''><button className='text-sm font-bold text-white bg-green-500 px-2 py-2 rounded-full'>Search</button></span>
          </div>
          
        </div>


      </div>
      <Footer/>

    </div>
  )
}

export default Home
