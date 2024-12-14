import React, { useEffect, useState,useContext } from 'react'


import { db } from '../config'
import { collection, getDocs } from 'firebase/firestore'
import { CartContext } from '../Context/CartContext';
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from '../Context/WishlistContext';
function Products() {
  const navigate = useNavigate()
  const [products,setProducts] = useState([])
  const {addToCart} = useContext(CartContext)

  const {addToWishlist} = useContext(WishlistContext)
 
  const handleAddToWishList = (product) =>{
    addToWishlist(product)
    navigate("/wishlist")
   }
   const handleAddToCart = (product) =>{
    addToCart(product)
    navigate("/cart")
   }
  useEffect(()=>{
    const fetchProducts = async () =>{
      const productCollection = collection(db,"product");
      const productSnapshot = await getDocs(productCollection);
      setProducts(productSnapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))    }
    fetchProducts();
  },[])
  
  return (
    <div className='flex justify-center items-center bg-white h-full w-full '>
         <div className='flex flex-col justify-center w-4/5 h-4/5 bg-green-500 rounded-md m-3'>
         <div className='text-2xl font-bold text-white'>
            <h1>Popular Products</h1>
         </div>
         <div className='flex flex-wrap justify-center gap-4'>
           {
            products.map((product)=>{
              return <div key={product.id} className='bg-white flex flex-col rounded-lg h-[300px] w-[250px] m-1'>
                <div className='flex  justify-center items-center '>
                  <img src={product.filename} alt="" className='w-[100px] h-[120px] px-2 py-4'/>

                  </div>
                  <div className='flex flex-col m-1'>
                    <Link to={`/products/${product.id}`} className='mr-auto text-xl'>{product.title}</Link>
                    <span className='text-gray-500'>1 KG</span>
                    <span className='text-green-500'>{"$"}{product.price}</span>


                  </div>
                  <div className='flex gap-x-4 justify-center'>
                    <button className='bg-green-500 font-bold text-white w-[60px] m-1 rounded-md px-5' onClick={()=>handleAddToCart(product)}><CiCirclePlus /></button>
                    <button className='m-1 text-2xl text-red-500' onClick={()=>handleAddToWishList(product)}><FaHeart /></button>
                    <Link  to={`/products/${product.id}`} className='bg-blue-500 font-bold text-white w-[70px] rounded-md px-2'>Details</Link>
                  </div>
                
                
              </div>
            
            })
           }
            
            
         </div>


         </div>
      
    </div>
  )
}

export default Products
