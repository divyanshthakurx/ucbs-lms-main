import UserList from "../../components/Users/users-list/users-list.component";
import UpdateIssueFine from "../../components/Users/user-issue-fine/user-issue-fine.component";
const ManageIssueFine = () => {
    return(
        <>
            <div className="grid grid-cols-2 gap-0 w-full">
                <UpdateIssueFine/>
                <div className="w-full"><UserList/></div>
            </div>
        </>
    )
}

export default ManageIssueFine;