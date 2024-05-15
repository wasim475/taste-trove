
import { Navigate } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const MyRoute = ({children}) => {
    const {user, loading}= useContext(AuthContex)
    
    if(loading){
        return  <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  className="rounded-full h-28 w-28"/>
    </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/gallery"></Navigate>
    
};

export default MyRoute;