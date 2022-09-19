import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";

const PrivateRoutes = () => {

    const {isAuthenticated} = useAuth()

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default PrivateRoutes;