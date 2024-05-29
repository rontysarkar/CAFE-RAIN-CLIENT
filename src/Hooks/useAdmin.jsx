import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useAuth()

    const {data :isAdmin,isPending:isAdminLoading} = useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async() =>{
            const {data} = await axios.get(`${import.meta.env.VITE_url}/users/admin/${user?.email}`)
            return data?.isAdmin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;