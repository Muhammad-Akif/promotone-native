import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from 'firebase'
import {auth} from '../api/firebase'


interface IUserAuthContext{
    user: firebase.User | null
}

const defaultValues : IUserAuthContext = {
    user: auth.currentUser || null
};

const userAuthContext = createContext<IUserAuthContext>(defaultValues);

interface Props{
    children: JSX.Element[] | JSX.Element
}

const UserAuthContextProvider = ({children} : Props) =>{
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) setUser(currentUser)
        })

        return ()=>unsubscribe()
    }, [])

    return <userAuthContext.Provider value={{user}}>{children}</userAuthContext.Provider>
}

const useUserAuth = () => {
    return useContext(userAuthContext)
}


export {UserAuthContextProvider, useUserAuth}