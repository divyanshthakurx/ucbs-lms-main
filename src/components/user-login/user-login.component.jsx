import FormInput from "../input-field/input-field.component";
import { UsersContext } from "../../context/users.context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogIn = () => {
  const {Users} = useContext(UsersContext);
  const [selectedUser, setselectedUser] = useState({user_id: "", password: ""});
  const {user_id, password} = selectedUser;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setselectedUser({...selectedUser, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const User = Users.find((user) => user.user_id == user_id && user.password == password);
    if (!User) {
      alert("Invalid Credentials");
    } else {
      localStorage.setItem('currentuser', 'true');
      localStorage.setItem('currentuserCreds', user_id);
      return  navigate("/user-dashboard");
    }
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem('currentuser', 'false');
    localStorage.removeItem('currentuserCreds');
    navigate("/log-in");
  }
  return (
    <>
        <h1 className="text-3xl">User LogIn</h1>
        <div>
            <FormInput type="text" placeholder="User Id" onChange={handleChange} label="User Id" name="user_id" value={user_id}/>
            <FormInput type="password" placeholder="Password" onChange={handleChange} label="Password" name="password" value={password}/>
            <button type="submit" onClick={handleSubmit}>LogIn</button>
            <button type="button" onClick={handleLogout}>Log out</button>
        </div>
    </>
  )
}

export default UserLogIn;