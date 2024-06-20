import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
const Book = ({book_item}) => {
    const {setclickedBook} = useContext(BooksContext);
    const {title, author, image_url, stock, course, s_no} = book_item;
    const handleClick = () => {
        setclickedBook(book_item);
    }

    return(
        <>
            <div className="bg-[#F0F0F0] w-full">
                <div className="flex justify-around">
                    <div className="my-6 grid grid-cols-4 gap-4 place-items-center place-content-center	">
                        <div className="col-span-2">
                        <img className="rounded-md cursor-pointer w-64" onClick={handleClick} src={image_url} alt={title} />
                        </div>
                        <div>
                            <div>
                                <div className="font-bold text-2xl">{title}</div>
                                <div>Author: <span className="font-semibold underline">{author}</span></div>
                                <div>Course: <span className="font-semibold underline">{course}</span></div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <div className="font-semibold">BCA</div>
                                <div>Stock Available: <span className="font-semibold">{stock}</span></div>
                            </div>
                        </div>
                        <div className="font-semibold">
                            <div>{s_no}</div>
                        </div>                           
                    </div>      
                </div>
            </div>
        </>
    )
}

export default Book;