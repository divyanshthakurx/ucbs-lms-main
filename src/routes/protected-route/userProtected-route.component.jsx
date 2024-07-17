import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedRoute = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentuser") === "false") {
      navigate("/log-in");
    }
  }, []);

  return children;
};

export default UserProtectedRoute;