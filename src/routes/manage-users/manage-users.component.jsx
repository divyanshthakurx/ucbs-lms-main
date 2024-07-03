import UserList from "../../components/Users/users-list/users-list.component";
import UpdateNewUser from "../../components/Users/user-update/update-user.component";
import { Outlet } from "react-router-dom";
const ManageUsers = () => {
    return(
        <>
            <Outlet/>
            <div className="flex justify-between px-32"><UpdateNewUser/><UserList/></div>
        </>
    )
}

export default ManageUsers;