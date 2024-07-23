import BooksList from "../../components/Books/books-list/books-list.component";
import UpdateBookComponent from "../../components/Books/book-update/update-book.component";
const ManageBooks = () => {

    return(
        <>
            <div className="border-2 border-solid rounded-2xl border-gray-300 dark:border-gray-600 mb-4 h-[46rem]">
                <div className="grid grid-cols-2 gap-0 w-full">
                    <UpdateBookComponent/>
                    <BooksList/>
                </div>
            </div>
        </>
    )
}

export default ManageBooks;