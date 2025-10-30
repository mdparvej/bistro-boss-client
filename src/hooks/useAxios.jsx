import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
const secureAxios = axios.create({
    baseURL: 'https://bistro-boss-server-seven-gray.vercel.app/'
})
const useAxios = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    secureAxios.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },function(error){
        return Promise.reject(error);
    });
    // intercepts 401 and 403 status
    secureAxios.interceptors.response.use((response) => {
        return response;
    },(error)=> {
        const status = error.response.status;
        // for 401 or 403 logout the user and move the user to the logout
        if(status === 401 || status === 403){
            logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })

    return secureAxios;
};

export default useAxios;