import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { SportsContext } from "../contextApi/SportsContext";
import { useContext } from "react";


const PrivetRoute = ({ children }) => {
    const { users, loader } = useContext(SportsContext);
    // find location
    const location = useLocation()

    if (loader) {
        return <Loader ></Loader>
    }
    if (users && users?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>
}
export default PrivetRoute