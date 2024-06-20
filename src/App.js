import "./output.css";

import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component';
import ManageBooks from "./routes/manage-books/manage-books.component";
import Notification from "./routes/notification/notification.component";
import IssuedBooks from "./components/issued-books/issued-books.component";
import BooksList from "./components/books-list/books-list.component";
import ManageUsers from "./routes/manage-users/manage-users.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route path="/ManageBooks" element={<ManageBooks/>}/>
            <Route path="/notifications" element={<Notification/>}/>
            <Route path="/ManageUsers" element={<ManageUsers/>}>
              <Route path="IssuedBooks" element={<div className="flex justify-evenly"><IssuedBooks/><BooksList/></div>}/>
            </Route>
          </Route>
        </Routes>

        <Footer />
    </>
  );
}

export default App;