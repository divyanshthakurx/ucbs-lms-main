import CreateNewBook from "../../components/create-book/create-book.component";
import BooksList from "../../components/books-list/books-list.component";
import BookSearch from "../../components/book-search/book-search.component";
const ManageBooks = () => {

    return(
        <>
            <h1>This is Books Management Route</h1>
            <CreateNewBook/>
            <BooksList/>
            <BookSearch/>
        </>
    )
}

export default ManageBooks;