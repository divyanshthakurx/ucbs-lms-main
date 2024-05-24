import CreateNewBook from "../../components/create-book/create-book.component";
import BooksList from "../../components/books-list/books-list.component";
import UpdateBookComponent from "../../components/update-book/update-book.component";
const ManageBooks = () => {

    return(
        <>
            <h1>This is Books Management Route</h1>
            <CreateNewBook/>
            <UpdateBookComponent/>
            <BooksList/>
        </>
    )
}

export default ManageBooks;