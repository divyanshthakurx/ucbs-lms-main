import { createContext, useState, useEffect } from "react";
import { listFines } from '../lib/fine-history.appwrite';

export const FinesContext = createContext ({
    currentFine: null,
    setcurrentFine: () => null
})

const Fines_array = listFines();

export const FinesProvider = ({children}) => {
    const [currentFine, setcurrentFine] = useState();

    //Loads all the Fines in currentFine
    useEffect(()=>{
        Fines_array.then(result => setcurrentFine(result.documents))
    }, [])

    const value = {currentFine, setcurrentFine};

    return <FinesContext.Provider value={value}>{children}</FinesContext.Provider>
}