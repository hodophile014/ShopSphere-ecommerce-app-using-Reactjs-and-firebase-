import React, { useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { NotificationsContext } from '../Context/NotificationsContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config';
import NoNotification from './NoNotification';
import { Link } from 'react-router-dom';

function Notifications() {
  const {notify} = useContext(NotificationsContext)
  const markAsRead = async (id)=>{
    try{
       const notificationRef = doc(db,"notifications",id)
       await updateDoc(notificationRef,{read:true});
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='flex justify-center items-center mt-10 h-full w-full'>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-x-11 underline text-xl justify-center m-5'>
                <Link to="/"><FaArrowLeftLong /></Link>
                <span>Notification</span>
            </div>
            <div>
             {notify.length===0?(<NoNotification/>):(
              <div className='flex flex-col justify-center items-center'>
                {
                   notify.map((notification)=>(
                    <div key={notification.id} className='flex flex-row rounded-md border-2 shadow-md m-1 px-2 py-4 h-[200px] w-full gap-x-4'>
                       <div>
                        <img src={notification.type} alt="" className='h-[150px]'/>
                       </div>
                       <div className='flex flex-col gap-y-4'>
                        <span className='text-xl font-bold'>{notification.title}</span>
                        <span className='text-gray-500'>{notification.desc}</span>
                        
                       
                        <div>
                       {
                          !notification.read && (
                            <button onClick={()=>markAsRead(notification.id)} className='text-white bg-green-500 px-2 py-2 rounded-md'>Mark as read</button>
                          )
                        }
                       </div>
                       </div>
                    
                    </div>
                   ))
                }

              </div>
             )}
            </div>

        </div>
      
    </div>
  )
}

export default Notifications
