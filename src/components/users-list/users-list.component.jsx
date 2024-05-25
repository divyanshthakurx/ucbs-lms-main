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
            <div className="mt-12 ml-12">
                <input className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" onChange={handleChange} placeholder="Search"/>
                <div className="relative mt-5">
                <select className="block appearance-none w-52 bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleCourse}>
                    <option value="B">All</option>
                    <option value="BBA">BBA</option>
                    <option value="BCA">BCA</option>
                </select>
                </div>
            </div>
            <div className="p-4 gap-4 grid grid-cols-5">
                {filteredList && filteredList.sort((a, b) => a.name.localeCompare(b.name)).map(user => <User key={user.user_id} user_item={user} />)}
            </div>
        </>
    )
}

export default UsersList;