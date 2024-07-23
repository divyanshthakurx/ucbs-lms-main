import FormInput from '../../input-field/input-field.component';
import { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../../../context/users.context';
import { Link } from 'react-router-dom';
const UpdateNewUser = () => {
    const {updateThisUser, deleteThisUser, createThisUser, clickedUser, setibookclick} = useContext(UsersContext);
    const [selectedUser, setselectedUser] = useState({});

    useEffect(() => {
        setselectedUser(clickedUser);
    }, [clickedUser]);

    const {user_id, password, name, roll_no, course, year, fine, book} = selectedUser;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setselectedUser({...selectedUser, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateThisUser(selectedUser);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteThisUser(selectedUser);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        createThisUser(selectedUser);
    }

    const handleBook = (e) => {
        e.preventDefault();
        setibookclick(true);
    }

    return(
        <div className="w-full px-12">
            <div className="text-3xl md:text-4xl font-bold mb-8 mx-auto">
                <h1 className="w-[22vw]">Manage Users</h1>
            </div>
            <div className="text-xl font-semibold">
                <form>
                    <FormInput type="number" placeholder="user_id" onChange={handleChange} label="User ID *" name="user_id" value={user_id}/>
                    <FormInput type="password" placeholder="password" onChange={handleChange} label="Password *" name="password" value={password}/>
                    <FormInput type="text" placeholder="name" onChange={handleChange} label="Name *" name="name" value={name}/>
                    <FormInput type="number" placeholder="roll_no" onChange={handleChange} label="Roll Number *" name="roll_no" value={roll_no}/>
                    <FormInput type="text" placeholder="course" onChange={handleChange} label="Course *" name="course" value={course}/>
                    <FormInput type="text" placeholder="year" onChange={handleChange} label="Year *" name="year" value={year}/>
                    <FormInput type="number" placeholder="fine" onChange={handleChange} label="Fine" name="fine" value={fine}/>
                    <FormInput type="text" placeholder="book" readOnly label="Issued Books" name="book" value={book ? book.map(books => books.title) : ""}/>

                    {clickedUser.name && <button onClick={handleBook}><Link to="/admin-dashboard/manage-users/issued-books">Books</Link></button>}
                </form>
            </div>
            <div className="my-[3rem]">
            <div className="text-white flex justify-around">
                <button className="bg-blue-500 px-9 py-2 rounded-xl hover:bg-blue-600" type="submit" onClick={handleAdd}>Add</button>
                <button className="bg-green-500 px-9 py-2 rounded-xl hover:bg-green-600" type="submit" onClick={handleSubmit}>Submit</button>
                <button className="bg-red-500 px-9 py-2 rounded-xl hover:bg-red-600" type="button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default UpdateNewUser;