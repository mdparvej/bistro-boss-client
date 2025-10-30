import { useContext } from "react";
import { myContex } from "../ContexApi/ContexApi";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(myContex);
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return  <Navigate to="/login" state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;