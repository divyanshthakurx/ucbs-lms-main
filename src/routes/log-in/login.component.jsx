import UserLogIn from '../../components/user-login/user-login.component';
import AdminLogIn from '../../components/Admin-login/admin-login.component';

const LogIn = () => {
  return (
    <>
      <h1 className="text-3xl">Log In</h1>
      <UserLogIn />
      <AdminLogIn />
    </>
  );
}

export default LogIn;