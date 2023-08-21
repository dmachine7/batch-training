import { Navigate } from "react-router-dom";
// import { useAuth } from "../auth/useAuth";

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token')
	console.log(token)
  return token != null ? children : <Navigate to="/" />;
}

export default PrivateRoute;