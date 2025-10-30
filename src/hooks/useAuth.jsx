import { useContext } from "react";
import { myContex } from "../ContexApi/ContexApi";


const useAuth = () => {
    const auth = useContext(myContex);
    return auth;
};

export default useAuth;