import { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../../../context/users.context';
import FormInput from '../../input-field/input-field.component';
import IssuedBook from "../../issued-books/issued-books.component";

const UpdateNewUser = () => {
    const { updateThisUser, deleteThisUser, createThisUser, clickedUser, setibookclick } = useContext(UsersContext);
    const [selectedUser, setselectedUser] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setselectedUser(clickedUser);
    }, [clickedUser]);

    const { user_id, password, name, roll_no, course, year } = selectedUser;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setselectedUser({ ...selectedUser, [name]: value });
    };

    const validateForm = (user) => {
        const newErrors = validateUser(user);
        return newErrors;
    };
    const validateUser = (user) => {
        const newErrors = {};
        if (!user.name || user.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        if (!user.roll_no || user.roll_no < 1000 || user.roll_no > 9999) {
            newErrors.roll_no = "Roll No. must be between 1000 and 9999";
        }

        if (!user.user_id || user.user_id.toString().length !== 9) {
            newErrors.user_id = "User ID must be exactly 9 digits";
        }

        if (!user.password || user.password.length !== 10) {
            newErrors.password = "Pass must be exactly 10 characters";
        }

        if (!user.course || (user.course !== "bca" && user.course !== "bba")) {
            newErrors.course = "Course must be either BCA or BBA";
        }

        if (!user.year || (user.year !== "1" && user.year !== "2" && user.year !== "3")) {
            newErrors.year = "Year must be 1, 2, or 3";
        }

        return newErrors;
    };

    const handleUserAction = (e, actionType) => {
        e.preventDefault();
        const validationErrors = validateForm(selectedUser);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            if (actionType === 'update') {
                updateThisUser(selectedUser);
            } else if (actionType === 'add') {
                createThisUser(selectedUser);
            }
            setErrors({});
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteThisUser(selectedUser);
    };

    const handleBook = (e) => {
        e.preventDefault();
        setibookclick(true);
    };

    return (
        <>
            <div className="w-full flex flex-col px-14 py-8">
                <div className="text-3xl md:text-5xl font-bold mb-8">
                    <h1 className="w-fit">Manage User.</h1>
                </div>

                <div className="text-xl font-semibold">
                    <form>
                        <div className="grid grid-cols-2 gap-6">
                            {/* Name Field */}
                            <FormInput
                                type="text"
                                placeholder="name"
                                onChange={handleChange}
                                label="Name"
                                name="name"
                                value={name || ""}
                                error={errors.name}
                            />

                            {/* Roll Number Field */}
                            <FormInput
                                type="number"
                                placeholder="roll_no"
                                onChange={handleChange}
                                label="Roll Number"
                                name="roll_no"
                                value={roll_no || ""}
                                error={errors.roll_no}
                            />

                            {/* Course Select Field */}
                            <div className={`flex flex-col relative ${errors.course ? 'mb-8' : 'mb-4'}`}>
                                <label htmlFor="course">Course</label>
                                <select
                                    className={`h-10 mt-2 px-2 font-normal border rounded-lg bg-[#F0F0F0] ${
                                        errors.course ? 'border-red-500' : 'border-black'
                                    }`}
                                    name="course"
                                    id="course"
                                    value={course || ''}
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="bca">BCA</option>
                                    <option value="bba">BBA</option>
                                </select>
                                {errors.course && (
                                    <div className="absolute -top-8 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md shadow-lg z-10">
                                        <p className='pb-1'>{errors.course}</p>
                                        <div className="absolute left-2 bottom-[-5px] w-3 h-3 bg-red-500 rotate-45"></div>
                                    </div>
                                )}
                            </div>

                            {/* User ID Field */}
                            <FormInput
                                type="number"
                                placeholder="user_id"
                                onChange={handleChange}
                                label="User ID"
                                name="user_id"
                                value={user_id || ""}
                                error={errors.user_id}
                            />

                            {/* Password Field */}
                            <FormInput
                                type="text"
                                placeholder="password"
                                onChange={handleChange}
                                label="Password"
                                name="password"
                                value={password || ""}
                                error={errors.password}
                            />

                            {/* Year Select Field */}
                            <div className={`flex flex-col relative ${errors.year ? 'mb-8' : 'mb-4'}`}>
                                <label htmlFor="year">Year</label>
                                <select
                                    className={`h-10 mt-2 px-2 font-normal border rounded-lg bg-[#F0F0F0] ${
                                        errors.year ? 'border-red-500' : 'border-black'
                                    }`}
                                    name="year"
                                    id="year"
                                    value={year || ''}
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                {errors.year && (
                                    <div className="absolute -top-8 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md shadow-lg z-10">
                                        <p className='pb-1'>{errors.year}</p>
                                        <div className="absolute left-2 bottom-[-5px] w-3 h-3 bg-red-500 rotate-45"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <IssuedBook />
                        {clickedUser.name && <button onClick={handleBook}>Books</button>}
                    </form>
                </div>

                <div className="mt-6">
                    <div className="text-white flex justify-around">
                        <button className="bg-green-500 px-9 py-2 rounded-xl" onClick={(e) => handleUserAction(e, 'add')}>Add</button>
                        <button className="bg-blue-500 px-9 py-2 rounded-xl" onClick={(e) => handleUserAction(e, 'update')}>Submit</button>
                        <button className="bg-red-500 px-9 py-2 rounded-xl" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateNewUser;