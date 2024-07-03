import BooksList from "../../components/Books/books-list/books-list.component";
import UpdateBookComponent from "../../components/Books/book-update/update-book.component";
const ManageBooks = () => {

    return(
        <>
            <div className="flex justify-between px-32">
                <UpdateBookComponent/>
                <BooksList/>
            </div>
        </>
    )
}

export default ManageBooks;