import { useAuth } from "../context/auth/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useAuth()
    console.log({isAuthenticated})

    return isAuthenticated ? children : <Navigate to='/login' />
}
export default PrivateRoute