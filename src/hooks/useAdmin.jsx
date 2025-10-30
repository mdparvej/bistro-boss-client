import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const {user,loading} = useAuth();
    const secureAxios = useAxios();
    const {data : isAdmin, isPending : isAdminLoading} = useQuery({
        queryKey: [user?.email,'isAdmin'],
        enabled: loading,
        queryFn: async() => {
            const res = await secureAxios.get(`/users/admin/${user.email}`);
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin,isAdminLoading];
};

export default useAdmin;