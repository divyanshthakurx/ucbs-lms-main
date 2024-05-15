import "./output.css";

import { Routes, Route } from "react-router-dom";
import UserNavigation from "./routes/user-navigation/user-navigation.component";
import BooksList from "./components/books-list/books-list.component";
import Notification from "./components/notification/notification.component";
import IssuedBooks from "./components/issued-books/issued-books.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<UserNavigation/>}>
            <Route path="/bookInventory" element={<BooksList/>}/>
            <Route path="/notifications" element={<Notification/>}/>
            <Route path="/issuedBooks" element={<IssuedBooks/>}/>
          </Route>
        </Routes>

        <Footer />
    </>
  );
}

export default App;