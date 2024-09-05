import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentadmin") === "false") {
      navigate("/log-in");
    }
  });

  return children;
};

export default AdminProtectedRoute;