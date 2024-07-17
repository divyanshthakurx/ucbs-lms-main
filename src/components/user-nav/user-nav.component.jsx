import { Link } from "react-router-dom";

const UserNav = () => {
    return(
      <>
          <h1 className="text-3xl">User Nav</h1>
          <Link to="/user-dashboard/issued-books">Issued Books</Link>
          <Link to="/user-dashboard/notifications">Notification</Link>
      </>
    )
  }
  
export default UserNav;