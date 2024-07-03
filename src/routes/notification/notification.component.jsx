import UserBooksHistory from "../../components/History/history-user-books/userbookshistory.component";
import FineHistory from "../../components/History/history-fines/finehistory.component";
import BooksHistory from "../../components/History/history-books/bookshistory.component";
const Notification = () => {
    return(
        <>
            <h1>History</h1>
            <UserBooksHistory />
            <FineHistory />
            <BooksHistory />
        </>
    )
}

export default Notification;