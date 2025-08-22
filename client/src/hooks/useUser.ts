
// aktif oturumu açık olan kullanıcı verisini al

import { useQuery } from "@tanstack/react-query"
import authApi from "../service/auth"

// hook kullanıldığı component renderlandığı anda api isteğini atıp kullanıcı verisini al

const useUser = () => {

  const { data, isLoading, error} = useQuery({
        queryKey:["user"],
        queryFn: () => authApi.getMe(),
        retry: false,
        select: (data) => data.data.user,
    });

    return { user:data, isLoading, error };
};


export default useUser;