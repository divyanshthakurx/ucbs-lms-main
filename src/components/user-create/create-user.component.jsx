import { useState, useContext } from "react";
import FormInput from "../input-field/input-field.component";
import { UsersContext } from "../../context/users.context";

const defaultValues = {
    user_id: "",
    password: "",
    name: "",
    roll_no: "",
    course: "",
    year: "",
    fine: "",
    issued_book: [],
}
const CreateNewUser = () => {
    const {createThisUser} = useContext(UsersContext);
    const [currentCreateUser, setcurrentCreateUser] = useState(defaultValues);

    const {user_id, password, name, roll_no, course, year, fine, issued_book} = currentCreateUser;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setcurrentCreateUser({...currentCreateUser, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createThisUser(currentCreateUser);
    }

    return(
        <div className="w-full px-12">
            <h1 className="text-3xl">Create User</h1>
            <form className="grid grid-cols-2">
                <FormInput type="number" placeholder="user_id" onChange={handleChange} label="User ID *" name="user_id" value={user_id}/>
                <FormInput type="password" placeholder="password" onChange={handleChange} label="Password *" name="password" value={password}/>
                <FormInput type="text" placeholder="name" onChange={handleChange} label="Name *" name="name" value={name}/>
                <FormInput type="number" placeholder="roll_no" onChange={handleChange} label="Roll Number *" name="roll_no" value={roll_no}/>
                <FormInput type="text" placeholder="course" onChange={handleChange} label="Course *" name="course" value={course}/>
                <FormInput type="text" placeholder="year" onChange={handleChange} label="Year *" name="year" value={year}/>
                <FormInput type="number" placeholder="fine" onChange={handleChange} label="Fine" name="fine" value={fine}/>
                <FormInput type="text" placeholder="issued_book" onChange={handleChange} label="Issued_book" name="issued_book" value={issued_book}/>
            </form>
            <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">Submit</button>
        </div>
    )
}

export default CreateNewUser;