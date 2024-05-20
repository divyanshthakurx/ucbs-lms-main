import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import Book from "../book/book.component";
const BooksList = () => {
    const {currentBook} = useContext(BooksContext);
    // map currentBook and return the book component
    return(
        <div className="p-4 gap-4 grid grid-cols-5">
          {currentBook && currentBook.map(book => <Book key={book.s_no} book_item={book}/>)}
        </div>
    )
}

export default BooksList;