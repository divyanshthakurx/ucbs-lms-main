import UserList from "../../components/users-list/users-list.component";
import UpdateNewUser from "../../components/user-update/update-user.component";
const ManageUsers = () => {
    return(
        <>
            <div className="flex justify-between px-32">
                <UpdateNewUser/>
                <UserList/>
            </div>
        </>
    )
}

export default ManageUsers;