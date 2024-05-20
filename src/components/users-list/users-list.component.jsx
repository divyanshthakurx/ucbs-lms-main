import { useContext } from 'react';
import { UsersContext } from '../../context/users.context';
import User from '../user/user.component';

const UsersList = () => {
    const { currentUser } = useContext(UsersContext);
    return(
        <>
            <div className="p-12">
                <h1>This is Users List</h1>
                <div className="ml-12 mt-12 grid grid-cols-4">
                    <p>Name</p>
                    <p>Roll No.</p>
                    <p>Course</p>
                    <p className="mb-5">Year</p>
                </div>
                <hr className='mb-5'/>
                <div>
                    {currentUser ?
                    currentUser.map(user => {
                        return <User key={user.user_id} user={user} />
                    })
                    :console.log("Not connected!")}
                </div>
            </div>
        </>
    )
}

export default UsersList;