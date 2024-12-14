import React, { useContext, useState } from 'react'
import {Menu, X} from "lucide-react";
import { GiShoppingCart } from "react-icons/gi";
import { navItems } from '../Data/data';
import { Link, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import {AuthContext} from "../Context/AuthContext"
import { auth } from '../config';
import { signOut } from 'firebase/auth';
import { CartContext } from '../Context/CartContext';
import { WishlistContext } from '../Context/WishlistContext';
import { IoIosNotifications } from "react-icons/io";
import { NotificationsContext } from '../Context/NotificationsContext';
function Navbar() {
  const {currentUser} = useContext(AuthContext)
  const {cartItems} = useContext(CartContext)
  const {wishlistItems} = useContext(WishlistContext)
  const {notify} = useContext(NotificationsContext)
  const unreadCount  = notify.filter((n)=>!n.read).length;

  const navigate = useNavigate();

  const handleLogout = async () =>{
    try{
      await signOut(auth);
      navigate("/login");
    } 
    catch(err){
      console.error("Error logging out",err);
    }
  }
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
 
  return (
    <nav className='sticky top-0 py-3 z-50 backdrop-blur-lg'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0 '>
             <span className='text-4xl mr-2 text-green-500'><GiShoppingCart /></span>
             <span className='text-xl tracking-tight font-bold'>ShopSphere</span>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>
                {navItems.map((item,index)=>(
                    <li key={index}>
                        <Link to={item.href} className='font-bold hover:text-green-500'>{item.label}
                        </Link>

                    </li>
                ))}

            </ul>
           <div className='flex flex-row'>
             <Link to="/notifications" className='text-3xl text-yellow-400'><IoIosNotifications /></Link>
             <span className='text-red-500 text-sm'>{unreadCount > 0 && `(${unreadCount})`}</span>
             </div>
            <div className='lg:flex justify-center space-x-12 items-center'>
                <button className='h-[40px] w-[40px] px-2 text-xl text-red-600 bg-red-300 rounded-full' onClick={()=>{navigate("/wishlist")}}><CiHeart /></button>
                <button  className='h-[40px] w-[40px] px-2 text-xl text-green-600 bg-green-300 rounded-full' onClick={()=>{navigate("/cart")}}><GiShoppingCart /></button>

            </div>
            <div className='lg:flex justify-center items-center'>
              { currentUser ? (
                <>
                 <span className=''>Hello,<span className='text-green-500 m-1 text-sm'>{currentUser.email}</span></span>
                 <button onClick={handleLogout} className='h-[40px] w-[130px] px-2 py-2 text-white bg-green-500 rounded-md'>LogOut</button>
                </>
              ):(
                <>
                <Link to="/login" className='bg-green-500 text-white px-2 py-4 rounded-md'>Please Login</Link>
                </>
              )} 

            </div>
            <div className='lg:hidden md:flex flex-col justify-start'>
                <button onClick={toggleNavbar}>{mobileDrawerOpen?<X/>:<Menu/>}</button>

            </div>

         {mobileDrawerOpen && (
            <div className='fixed right-0 z-20 bg-green-500 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                <ul>
                    {
                        navItems.map((item,index)=>(
                            <li key={index} className='py-4'>
                                <Link to={item.href}>{item.label}</Link>

                            </li>
                        ))
                    }
                </ul>

            </div>
         )}

        </div>

      </div>
      
    </nav>
  )
}

export default Navbar
