import UserList from "../../components/users-list/users-list.component";
import CreateNewUser from "../../components/user-create/create-user.component";
import UpdateNewUser from "../../components/user-update/update-user.component";
const ManageUsers = () => {
    return(
        <>
            <div className="p-10">
                <div className="grid grid-cols-2 gap-5">
                    <div className="border border-black pt-10 pb-10">
                        <CreateNewUser/>
                    </div>
                    <div className="border border-black pt-10 pb-10">
                        <UpdateNewUser/>
                    </div>
                </div>
                <UserList/>
            </div>
        </>
    )
}

export default ManageUsers;