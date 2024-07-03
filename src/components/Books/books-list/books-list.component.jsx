import { useContext, useState } from "react";
import { BooksContext } from "../../../context/books.context";
import Book from "../book/book.component";

export let selectedBook = {}
const BooksList = () => {
  const {Books} = useContext(BooksContext);
  const [userSearch, setuserSearch] = useState("");
  const [course, setcourse] = useState("");

  const handleChange = ({ target: { value } }) => setuserSearch(value);
  const handleCourse = ({target: {value}}) => setcourse(value);
  const filteredList = Books && Books.filter(book => book.title.toLowerCase().includes(userSearch.toLowerCase())).filter(book => book.course.toLowerCase().includes(course.toLowerCase()));

  return(
    <>
      <div className="row-span-1">
        <div className="mb-6 flex justify-between align-bottom">
          <input className="px-5 w-2/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" onChange={handleChange} placeholder="Search"/>
          <div className="relative">
            <select className="block appearance-none w-52 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleCourse}>
              <option value="B">All</option>
              <option value="BBA">BBA</option>  
              <option value="BCA">BCA</option>
            </select>
          </div>
        </div>

        <div className="w-[46vw]">
          <div className="bg-black grid grid-cols-4 gap-4 place-items-center font-semibold text-xl text-white w-full rounded-t-2xl">
              <div>Book ID</div>
              <div className="justify-self-start">Book Details</div>
              <div className="justify-self-end">Book Cover</div>
          </div>
          {filteredList && filteredList.filter((_, idx) => idx < 5).sort((a, b) => a.title.localeCompare(b.title)).map(book => <Book key={book.s_no} book_item={book} />)}
        </div>
      </div>
    </>
  )
}

export default BooksList;