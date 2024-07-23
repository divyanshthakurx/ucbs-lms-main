import { Link } from "react-router-dom";

const AdminNav = () => {
  return(
    <>
        <h1 className="text-3xl">Admin Nav</h1>
        <div className="flex flex-col">
          <Link to="/admin-dashboard/manage-books">Manage Books</Link>
          <Link to="/admin-dashboard/manage-users">Manage Users</Link>
          <Link to="/admin-dashboard/history">History</Link>
        </div>
    </>
  )
}

export default AdminNav;