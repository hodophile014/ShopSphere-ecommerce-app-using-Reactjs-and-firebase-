import { createContext,  useState,useEffect } from "react"
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}

        </AuthContext.Provider>
    )
}
