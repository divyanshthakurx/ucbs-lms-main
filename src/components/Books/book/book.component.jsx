import { useContext } from "react";
import { BooksContext } from "../../../context/books.context";
const Book = ({book_item}) => {
    const {setclickedBook} = useContext(BooksContext);
    const {title, author, image_url, stock, course, s_no} = book_item;
    const handleClick = () => {
        setclickedBook(book_item);
    }

    return(
        <>
            <div className="flex justify-around">
                <div className="mb-6 grid grid-cols-2 gap-1 place-items-center place-content-center	border border-gray-500 rounded-xl p-6">
                    <div className="justify-self-start">
                        <img className="rounded-md cursor-pointer w-64" onClick={handleClick} src={image_url} alt={title} />
                    </div>
                    <div>
                        <div>
                            <div className="font-bold text-2xl">{title}</div>
                            <div>Author: <span className="font-semibold underline">{author}</span></div>
                            <div>Course: <span className="font-semibold underline">{course}</span></div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div>Stock Available: <span className="font-semibold">{stock}</span></div>
                        </div>
                    </div>
                    <div className="font-semibold">
                        <div>{s_no}</div>
                    </div>                           
                </div>      
            </div>
        </>
    )
}

export default Book;