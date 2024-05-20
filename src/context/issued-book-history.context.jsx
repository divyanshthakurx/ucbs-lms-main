import { createContext, useState, useEffect } from "react";
import { createIssuedBook } from '../lib/issued-books-history.apwrite';

export const IssuedBooksContext = createContext ({
    currentIssuedBook: null,
    setcurrentIssuedBook: () => null
})

/* const IssuedBooks_array = createIssuedBook(); */

export const IssuedBooksProvider = ({children}) => {
    const [currentIssuedBook, setcurrentIssuedBook] = useState();

    /* useEffect(()=>{
        IssuedBooks_array.then(result => setcurrentIssuedBook(result.documents))
    }, []) */

    const value = {currentIssuedBook, setcurrentIssuedBook};

    return <IssuedBooksContext.Provider value={value}>{children}</IssuedBooksContext.Provider>
}