import { createContext, useState } from "react";

export const BooksContext = createContext ({
    currentBook: null,
    setcurrentBook: () => null
})

const books_array = [
    {
        id: 1,
        name: "First",
        description: "First Book is here",
        author: "First author" 
    },
    {
        id: 2,
        name: "Second",
        description: "Second Book is here",
        author: "Second author" 
    },
    {
        id: 3,
        name: "Third",
        description: "Third Book is here",
        author: "Third author" 
    },
    {
        id: 4,
        name: "Fourth",
        description: "Fourth Book is here",
        author: "Fourth author" 
    },
    {
        id: 5,
        name: "Five",
        description: "Five Book is here",
        author: "Five author"
    }
]

export const BooksProvider = ({children}) => {
    const [currentBook, setcurrentBook] = useState(books_array);
    const value = {currentBook, setcurrentBook};

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}