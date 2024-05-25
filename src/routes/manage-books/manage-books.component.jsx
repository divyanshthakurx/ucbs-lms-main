import CreateNewBook from "../../components/book-create/create-book.component";
import BooksList from "../../components/books-list/books-list.component";
import UpdateBookComponent from "../../components/book-update/update-book.component";
const ManageBooks = () => {

    return(
        <>
            <div className="p-10">
                <div className="grid grid-cols-2 gap-5">
                    <div className="border border-black pt-10 pb-10">
                        <CreateNewBook/>
                    </div>
                    <div className="border border-black pt-10 pb-10">
                        <UpdateBookComponent/>
                    </div>
                </div>
                <BooksList/>
            </div>
        </>
    )
}

export default ManageBooks;