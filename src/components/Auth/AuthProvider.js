import React,{useContext,useState,useEffect} from 'react'
import {auth} from './firebase'
import {signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'

const AuthContext = React.createContext("Default Context: no user logged in");

export function useAuth()
{
    return useContext(AuthContext)
}


export function AuthProvider({children})
{
    const [currentUser,setCurrentUser] = useState(null)
    const value = {
        currentUser,
        signout,
        signin,
        signup
    }
    
    function signout()
    {
        signOut(auth);
    }

    function signin(usr,pwd)
    {
        signInWithEmailAndPassword(auth,usr,pwd);
    }

    function signup(usr,pwd)
    {
        createUserWithEmailAndPassword(auth,usr,pwd);
    }

    useEffect(()=>{
        const unsub = auth.onAuthStateChanged(user=>setCurrentUser(user))
        return(unsub)
    },[])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
