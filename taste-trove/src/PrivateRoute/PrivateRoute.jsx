import { useContext } from "react";
import  { AuthContex } from "./provider/AuthProviderr";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loding}= useContext(AuthContex)
    const location = useLocation()
    if(loding){
        return  <div className="text-center">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default PrivateRoute;