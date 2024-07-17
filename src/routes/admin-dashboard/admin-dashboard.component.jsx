import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return(
    <>
      <h1 className="text-3xl">Admin Dashboard</h1>
      <Outlet />
    </>
  )
}

export default AdminDashboard;