import React,{useState ,useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Loading from './Loading';
import { db } from '../config';
import { doc,getDoc } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext';
import { WishlistContext } from '../Context/WishlistContext';
import { FaHeart } from "react-icons/fa";

function ProductDetails() {
   const navigate = useNavigate()
   const {productId} = useParams();
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
    const [product,setProduct] = useState(null);
    useEffect(()=>{
      const fetchProduct = async () =>{
        const productRef = doc(db,"product",productId);
        const productSnapshot = await getDoc(productRef)
        if(productSnapshot.exists()){
          setProduct({productId:productSnapshot.id,...productSnapshot.data()})
        }
      }
     fetchProduct()
    },[productId])
    if(!product) return <Loading/>
  return (
    
    <div className='flex justify-center items-center h-[100dvh] w-full m-10 bg-white'>
      <div className='flex flex-col gap-y-4'>
        <div className='flex justify-center border-b-2 border-gray-400 gap-x-8'>
            <span><Link to="/products"><FaArrowLeft /></Link></span>
            <span className='text-xl font-bold'>Product Details</span>
        </div>
        <div className='flex flex-col bg-white'>
            <div className='bg-green-500  flex flex-col text-white text-xl '>
              
                <img src={product.filename} alt=""/>
              <span className='text-center m-1 flex justify-center'>
                <span>{product.title}</span>
                <button className='m-1 text-2xl' onClick={()=>handleAddToCart(product)}><CiCirclePlus /></button>
                <button className='m-1 text-2xl text-red-500' onClick={()=>handleAddToWishList(product)}><FaHeart /></button>
              </span>
             <span className='text-gray-700 text-sm m-1 text-center'> {product.type}</span>
             <span className='font-bold text-yellow-400 m-1 text-center'>{"$"}{product.price}</span>
             <span className='text-sm m-1 text-center'>{product.description}</span>
             <span className='text-sm'>
             
              
             </span>
            </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails
