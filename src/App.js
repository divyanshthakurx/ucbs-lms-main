import "./output.css";

import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component';
import LogIn from './routes/log-in/login.component';
import ManageBooks from "./routes/manage-books/manage-books.component";
import Notification from "./routes/notification/notification.component";
import IssuedBooks from "./components/issued-books/issued-books.component";
import BooksList from "./components/Books/books-list/books-list.component";
import ManageUsers from "./routes/manage-users/manage-users.component";
import Footer from "./components/footer/footer.component";
import AdminProtectedRoute from "./routes/protected-route/adminProtected-route.component";
import UserProtectedRoute from "./routes/protected-route/userProtected-route.component";
import UserDashboard from "./routes/user-dashboard/user-dashboard.component";
import AdminDashboard from "./routes/admin-dashboard/admin-dashboard.component";
import AdminNav from "./components/admin-nav/admin-nav.component";
import UserNav from "./components/user-nav/user-nav.component";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/log-in" element={<LogIn/>}/>

          {/* Admin Protected Routes */}
          <Route path="/admin-dashboard" element={<AdminProtectedRoute><AdminDashboard/></AdminProtectedRoute>}>
            <Route path="navigation" element={<AdminNav/>}/>
            <Route path="manage-books" element={<ManageBooks/>}/>
            <Route path="history" element={<Notification/>}/>
            <Route path="manage-users" element={<ManageUsers/>}>
              <Route path="issued-books" element={<div className="flex justify-evenly"><IssuedBooks/><BooksList/></div>}/>
            </Route>
          </Route>

          {/* User Protected Routes */}
          <Route path="/user-dashboard" element={<UserProtectedRoute><UserDashboard/></UserProtectedRoute>}>
            <Route path="navigation" element={<UserNav/>}/>
            <Route path="books-issued" element={<div className="flex justify-evenly"><IssuedBooks/><BooksList/></div>}/>
            <Route path="notifications" element={<Notification/>}/>
          </Route>
        </Routes>

        <Footer />
    </>
  );
}

export default App;