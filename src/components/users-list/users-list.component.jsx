import { useContext, useState } from 'react';
import { UsersContext } from '../../context/users.context';
import User from '../user/user.component';

const UsersList = () => {
    const { currentUser } = useContext(UsersContext);
    const [userSearch, setuserSearch] = useState("");
    const [course, setcourse] = useState("");

    const handleChange = ({ target: { value } }) => setuserSearch(value);
    const handleCourse = ({target: {value}}) => setcourse(value);
    const filteredList = currentUser && currentUser.filter(user => user.name.toLowerCase().includes(userSearch.toLowerCase())).filter(user => user.course.toLowerCase().includes(course.toLowerCase()));
    return(
        <>
            <div className="row-span-1">
                <div className="mb-6 flex justify-between align-bottom">
                    <input className="px-5 w-2/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" onChange={handleChange} placeholder="Search"/>
                    <div className="relative">
                        <select className="block appearance-none w-52 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleCourse}>
                        <option value="B">All</option>
                        <option value="BBA">BBA</option>
                        <option value="BCA">BCA</option>
                        </select>
                    </div>
                </div>

                <div className="w-[46vw]">
                    <div className="bg-black grid grid-cols-4 gap-4 place-items-center font-semibold text-xl text-white w-full rounded-t-2xl">
                        <div className="justify-self-end">User Cover</div>
                        <div className="justify-self-start">User Details</div>
                        <div>User ID</div>
                    </div>
                    {filteredList && filteredList.sort((a, b) => a.name.localeCompare(b.name)).map(user => <User key={user.user_id} user_item={user} />)}
                </div>
            </div>
        </>
    )
}

export default UsersList;