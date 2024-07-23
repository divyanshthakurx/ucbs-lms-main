import { Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../context/users.context";
import { getUser } from "../../lib/user.appwrite";

const UserDashboard = () => {
  const [curUser, setCurUser] = useState({});
  const {Users} = useContext(UsersContext);
  const user = Users && Users.find((user) => user.user_id == localStorage.getItem('currentuserCreds'));
  const some = user && getUser(user.$id);
  
  useEffect(() => {
    some && some.then((result) => setCurUser(result));
  }, [user]);

  return(
    <>
      <h1 className="text-3xl">Hi! {curUser.name}</h1>
      <Outlet />
    </>
  )
}

export default UserDashboard;