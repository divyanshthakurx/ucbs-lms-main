import { Link } from "react-router-dom";

const UserNav = () => {
    return(
      <>
          <h1 className="text-3xl">User Nav</h1>
          <div className="flex flex-col">
            <Link to="/user-dashboard/issued-books">Issued Books</Link>
            <Link to="/user-dashboard/book-inventory">Book Inventory</Link>
            <Link to="/user-dashboard/notifications">Notification</Link>
          </div>
      </>
    )
  }
  
export default UserNav;