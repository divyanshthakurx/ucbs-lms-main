import { useContext } from "react";
import { UsersContext } from "../../context/users.context";
import UserList from "../../components/Users/users-list/users-list.component";
import UpdateNewUser from "../../components/Users/user-update/update-user.component";
import BooksList from "../../components/Books/books-list/books-list.component";
const ManageUsers = () => {
    const { ibookclick } = useContext(UsersContext);
    return(
        <>
            {ibookclick ?
            <div>
                <div className="grid grid-cols-2 gap-0 w-full">
                    <UpdateNewUser/>
                    <BooksList/>
                </div>
            </div>
             :
            <div>
                <div className="grid grid-cols-2 gap-0 w-full">
                    <UpdateNewUser/>
                    <div className="w-full"><UserList/></div>
                </div>
            </div>
            }
        </>
    )
}

export default ManageUsers;