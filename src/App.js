import "./output.css";

import { Routes, Route } from "react-router-dom";
import UserNavigation from "./routes/user-navigation/user-navigation.component";
import ManageBooks from "./routes/manage-books/manage-books.component";
import Notification from "./routes/notification/notification.component";
import IssuedBooks from "./components/issued-books/issued-books.component";
import ManageUsers from "./routes/manage-users/manage-users.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<UserNavigation/>}>
            <Route path="/ManageBooks" element={<ManageBooks/>}/>
            <Route path="/notifications" element={<Notification/>}/>
            <Route path="/issuedBooks" element={<IssuedBooks/>}/>
            <Route path="/ManageUsers" element={<ManageUsers/>}/>
          </Route>
        </Routes>

        <Footer />
    </>
  );
}

export default App;