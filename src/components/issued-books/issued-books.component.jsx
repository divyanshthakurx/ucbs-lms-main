import { useContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { UsersContext } from "../../context/users.context";
import { BooksContext } from "../../context/books.context";

const IssuedBooks = () => {
  const { updateThisUser, clickedUser, setclickedUser, ibookclick } = useContext(UsersContext);
  let { clickedBook } = useContext(BooksContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (ibookclick === true) {
        setBooks(clickedUser.book);
    } else {
        redirect("/ManageUsers");
    }
  }, [ibookclick, clickedUser]);

  if(clickedBook.s_no){
    if (clickedUser && clickedUser.book && clickedBook) {
      console.log(clickedUser.book.map(b => b.s_no), " ", clickedBook.s_no);
      const existingBook = clickedUser.book.find(b => b.s_no === clickedBook.s_no);
      console.log(existingBook);
      if (!existingBook) {
        clickedUser.book.push(clickedBook);
        updateThisUser(clickedUser);
      } else {
        console.log("Book already exists");
      }
    }
  }

  if (!ibookclick) return null;

  const handleDelete = (book) => {
    const updatedBooks = books.filter((b) => b.s_no !== book.s_no);
    setBooks(updatedBooks);
    const updatedUser = { ...clickedUser, book: updatedBooks };
    updateThisUser(updatedUser);
    setclickedUser(updatedUser);
  };

  return (
    <div>
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
        <p className="text-xl font-bold">{clickedUser.name}</p>
        <p className="text-lg">Roll No: {clickedUser.roll_no}</p>
        <p className="text-lg">Course: {clickedUser.course}</p>
        <p className="text-lg">Year: {clickedUser.year}</p>
      </div>

      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
        <p className="text-xl font-bold">Issued Books</p>
        <ul className="text-lg">
          {books.map((book) => (
            <li key={book.s_no}>
              {book.title}
              <button
                className="ml-10 text-red-500 hover:text-red-700"
                onClick={() => handleDelete(book)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IssuedBooks;