import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../config";

export const NotificationsContext = createContext();
export  const NotificationsProvider = ({children})=>{
    const [notify,setNotify] = useState([]);

    useEffect(()=>{
    
        const q = query(
            collection(db,"notifications"))
        const unsubscribe = onSnapshot(q,(snapshot)=>{
            const fetchedNotifications =  snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),

            }))
            setNotify(fetchedNotifications);
        })
        return () => unsubscribe();

    },[]);
    return(
        <NotificationsContext.Provider value={{notify}}>
            {children}

        </NotificationsContext.Provider>
    )


}