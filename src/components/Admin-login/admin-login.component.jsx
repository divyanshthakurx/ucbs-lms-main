import FormInput from "../input-field/input-field.component";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/admin.context";
import { useNavigate } from "react-router-dom";

const AdminLogIn = () => {
  const {admins} = useContext(AdminContext);
  const [selectedAdmin, setselectedAdmin] = useState({admin_id: "", password: ""});
  const {admin_id, password} = selectedAdmin;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setselectedAdmin({...selectedAdmin, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const admin = admins.find((admin) => admin.admin_id == admin_id && admin.password == password);
    if (!admin) {
      alert("Invalid Credentials");
    } else {
      localStorage.setItem('currentadmin', 'true');
      return  navigate("/admin-dashboard");
    }
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem('currentadmin', 'false');
    navigate("/log-in");
  }

  return (
    <>
        <h1 className="text-3xl">Admin LogIn</h1>
        <form>
            <FormInput type="text" placeholder="Admin ID" onChange={handleChange} label="Admin Id" name="admin_id" value={admin_id}/>
            <FormInput type="password" placeholder="Password" onChange={handleChange} label="Password" name="password" value={password}/>
            <button type="submit" onClick={handleSubmit}>LogIn</button>
            <button type="button" onClick={handleLogout}>Log out</button>
        </form>
    </>
  )
}

export default AdminLogIn;