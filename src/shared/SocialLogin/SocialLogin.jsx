import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router";

const SocialLogin = () => {
    const {googleSignin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogle = () => {
        googleSignin()
        .then(res => {
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <button className="btn" onClick={handleGoogle}>
                <FaGoogle className="mr-4"></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;