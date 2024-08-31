import FormInput from '../../input-field/input-field.component';
import { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../../../context/users.context';
const UpdateIssueFine = () => {
    const {updateThisUser, clickedUser} = useContext(UsersContext);
    const [selectedUser, setselectedUser] = useState({});

    useEffect(() => {
        setselectedUser(clickedUser);
    }, [clickedUser]);

    const {user_id, fine, name, roll_no, course, year, amount_paid} = selectedUser;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setselectedUser({...selectedUser, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateThisUser(selectedUser);
    }

    const handlePaid = (e) => {
        if (e.target.checked) {
            setselectedUser({...selectedUser, amount_paid: fine, fine: 0});
        }
        return;
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

                                    <FormInput type="text" placeholder="name" label="Name *" name="name" readOnly={true} value={name && name}/>
                                    <FormInput type="number" placeholder="roll_no" label="Roll Number *" readOnly={true} name="roll_no" value={roll_no && roll_no}/>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="">Course</label>
                                        <select className="h-10 mt-2 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" name="Course" id="Course" disabled value={course && course.toLowerCase()}>
                                            <option>Course</option>
                                            <option value="bca">BCA</option>
                                            <option value="bba">BBA</option>
                                        </select>
                                    </div>
                                    <FormInput type="number" placeholder="Amount paid" label="Amount paid" name="amount_paid" value={amount_paid && amount_paid}/>
                                </div>
                            </div>

                            <div className="flex flex-col">

                                <FormInput type="number" placeholder="user_id" label="User ID *" readOnly={true} name="user_id" value={user_id && user_id}/>
                                <div className="flex flex-col">
                                    <label htmlFor="">Year</label>
                                    <select className="h-10 mt-2 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" name="Year" id="Year" disabled value={year && year}>
                                        <option>Year</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className='flex gap-2'>
                                    <FormInput type="number" placeholder="fine" onChange={handleChange} label="Fine" name="fine" value={fine && fine}/>
                                    <FormInput type="checkbox" label="Paid" name="pain" onChange={handlePaid}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mt-6">
                    <div className="text-white flex justify-around">
                        <button className="bg-blue-500 px-9 py-2 rounded-xl" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default UpdateIssueFine;