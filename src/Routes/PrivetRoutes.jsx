import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import { RiseLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return  <div className="absolute inset-0  h-screen max-w-[1920px] flex justify-center items-center p-5 "><RiseLoader size={40} color="#f39c12" /></div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'} ></Navigate>

};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    children: PropTypes.node
}