import { createContext, useState, useEffect } from "react";
import { listBooks, CreateBook } from '../lib/book.appwrite';

export const BooksContext = createContext ({
    currentBook: null,
    setcurrentBook: () => null
})

const books_array = listBooks();

export const BooksProvider = ({children}) => {
    const [currentBook, setcurrentBook] = useState();

    //Loads all the books in currentBook
    useEffect(()=>{
        books_array.then(result => setcurrentBook(result.documents))
    }, [])

    

    const value = {currentBook, setcurrentBook};

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}