import FormInput from '../../input-field/input-field.component';
import { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../../../context/users.context';
import { Link } from 'react-router-dom';
const UpdateIssueFine = () => {
    const {updateThisUser, deleteThisUser, createThisUser, clickedUser, setibookclick} = useContext(UsersContext);
    const [selectedUser, setselectedUser] = useState({});

    useEffect(() => {
        setselectedUser(clickedUser);
    }, [clickedUser]);

    const {user_id, password, name, roll_no, course, year, book} = selectedUser;

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
        <>
            <div className="w-full flex flex-col px-14 py-8">
                <div className="text-3xl md:text-5xl font-bold mb-8">
                    <h1 className="w-fit">Manage User.</h1>
                </div>

                <div className="text-xl font-semibold">
                    <form action="">
                        <div className="flex justify-between">

                            <div>
                                <div>

                                    <FormInput type="text" placeholder="name" onChange={handleChange} label="Name *" name="name" value={name}/>
                                    <FormInput type="number" placeholder="roll_no" onChange={handleChange} label="Roll Number *" name="roll_no" value={roll_no}/>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="">Course</label>
                                        <select className="h-10 mt-2 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" name="Course" id="Course" onChange={handleChange} defaultValue={course}>
                                            <option value="bba">All</option>
                                            <option value="bca">BCA</option>
                                            <option value="bba">BBA</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col">

                                <FormInput type="number" placeholder="user_id" onChange={handleChange} label="User ID *" name="user_id" value={user_id}/>
                                <FormInput type="password" placeholder="password" onChange={handleChange} label="Password *" name="password" value={password}/>
                                <div className="flex flex-col">
                                    <label htmlFor="">Year</label>
                                    <select className="h-10 mt-2 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" name="Year" id="Year" onChange={handleChange} defaultValue={year}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <FormInput type="text" placeholder="book" readOnly label="Issued Books" name="book" value={book ? book.map(books => books.title) : ""}/>
                        {clickedUser.name && <button onClick={handleBook}><Link to="/admin-dashboard/manage-users/issued-books">Books</Link></button>}
                    </form>
                </div>

                <div className="mt-6">
                    <div className="text-white flex justify-around">
                        <button className="bg-green-500 px-9 py-2 rounded-xl" type="submit" onClick={handleAdd}>Add</button>
                        <button className="bg-blue-500 px-9 py-2 rounded-xl" type="submit" onClick={handleSubmit}>Submit</button>
                        <button className="bg-red-500 px-9 py-2 rounded-xl" type="button" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default UpdateIssueFine;