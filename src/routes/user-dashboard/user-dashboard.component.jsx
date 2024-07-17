import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return(
    <>
      <h1 className="text-3xl">User Dashboard</h1>
      <Outlet />
    </>
  )
}

export default UserDashboard;