import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import PermissionDenied from "../pages/PermissionDenied";

const adminRoutes = [
    '/emissions',
]

const PrivateRoute = ({ children, redirectTo, rolesAllowed = [] }) => {
    useEffect(() => {
        // if (isAuthenticated) {
        //     if (!isAdmin && adminRoutes.indexOf(location.pathname) > -1) {
        //     }
        // }
    }, [])

    return "isAuthenticated" ? ("isAllowed" ? children :
        // <PermissionDenied/>
        <p>This is not Good</p>
    ) : <Navigate to={redirectTo} />;
}

export default PrivateRoute
