import { createContext, useState, useEffect } from "react";
import { listBooks, deleteBook, getBook, createBook, updateBook } from '../lib/book.appwrite';

export const BooksContext = createContext ({
    currentBook: null,
    setcurrentBook: () => null,
    getThisBook: () => null,
    createThisBook: () => null,
    deleteThisBook: () => null,
    updateThisBook: () => null,
    clickedBook: {},
})

const CreateBook = (book, currentBook) => {
  if (!book){
    return console.log("no book");
  }
  let exist = false;
  currentBook.map((curBook) => {
    if (curBook.name === book.name || parseInt(curBook.s_no) === book.s_no) {
      exist = true;
    }
    return [];
  });

  if (exist === true){
    return alert("book already exist");
  } else{
    try{
        createBook(book);
        alert("Book created successfully");
    } catch(error){
        console.log(error);
    }
  }
}

const DeleteBook = (book) => {
  deleteBook(book.$id);
}

const UpdateBook = (book) => {
  updateBook(book);
}

const GetBook = (book, setclickedBook) => {
  const result = getBook(book.$id);
  result.then(result => setclickedBook(result));
}

export const BooksProvider = ({children}) => {
    const [currentBook, setcurrentBook] = useState();
    const [clickedBook, setclickedBook] = useState({});

    useEffect(()=>{
      listBooks().then(result => setcurrentBook(result.documents));
    }, []);

    const createThisBook = (book) => {
        CreateBook(book, currentBook);
    }

    const deleteThisBook = (book) => {
        DeleteBook(book);
    }
    const updateThisBook = (book) => {
        UpdateBook(book);
    }
    const getThisBook = (book) => {
        GetBook(book, setclickedBook);
    }

    const value = {currentBook, setcurrentBook, getThisBook, createThisBook, deleteThisBook, updateThisBook, clickedBook};

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}