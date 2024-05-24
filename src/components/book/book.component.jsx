import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
const Book = ({book_item}) => {
    const {getThisBook} = useContext(BooksContext);
    const {name, description, author, image_URL} = book_item;
    const handleClick = () => {
        getThisBook(book_item);
    }

    return(
        <>
            <div className="mt-14 flex-1">
                <div className="w-full" >
                    <img className="" src={image_URL} alt={name}></img>
                </div>
                <div className="my-4">
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <h3>{author}</h3>
                    </div> 
                    <div>
                        <h3>{description}</h3>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>click</button>
                </div>
            </div>
        </>
    )
}

export default Book;