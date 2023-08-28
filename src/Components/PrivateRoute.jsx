import { Navigate } from "react-router-dom";

function PrivateRoute({ children, routeType }) {
  const token = localStorage.getItem('token')
  const type = localStorage.getItem('type')

  if (routeType == "customer") {
    return token != 'null' ? children : <Navigate to="/" />;
  } else {
    return type == "admin" && token != 'null' ? children : <Navigate to="/adminlogin" />;
  }
}

export default PrivateRoute;