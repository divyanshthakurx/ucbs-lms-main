import { createContext, useState, useEffect } from "react";
import { listUsers } from '../lib/user.appwrite';

export const UsersContext = createContext ({
    currentUser: null,
    setcurrentUser: () => null
})

const Users_array = listUsers();

export const UsersProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState();

    //Loads all the Users in currentUser
    useEffect(()=>{
        Users_array.then(result => setcurrentUser(result.documents))
    }, [])

    const value = {currentUser, setcurrentUser};

    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}